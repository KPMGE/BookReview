import { Book } from "../../entities/Book";
import { IBooksRepository } from "../IBooksRepository";
import { createPool, RowDataPacket, ResultSetHeader } from "mysql2/promise";

// Create the connection pool.
const pool = createPool({
  host: "localhost",
  user: "root",
  database: "books_review",
  password: "1234",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

interface IBookMysql extends RowDataPacket {
  id: string;
  title: string;
  author: string;
  description: string;
}

export class MysqlBooksRepository implements IBooksRepository {
  async save({ id, title, author, description }: Book): Promise<Book> {
    await pool.query(
      "INSERT INTO books (id, title, author, description) VALUES(?,?,?,?);",
      [id, title, author, description]
    );

    const [rows] = await pool.query<ResultSetHeader & Book>(
      "SELECT * FROM books WHERE id = ?;",
      [id]
    );

    return rows[0];
  }

  async getAllBooks(): Promise<Book[]> {
    const [rows] = await pool.query<IBookMysql[]>("SELECT * FROM books;");
    return rows;
  }

  async delete(id: string): Promise<Book> {
    const [rows] = await pool.query<ResultSetHeader & Book>(
      "SELECT * FROM books WHERE id = ?;",
      [id]
    );

    await pool.query("DELETE FROM books WHERE id=?", [id]);

    return rows[0];
  }

  async getBookById(id: string): Promise<Book> {
    const [rows] = await pool.query<ResultSetHeader & Book>(
      "SELECT * FROM books WHERE id = ?;",
      [id]
    );
    return rows[0];
  }

  async getBookByTitle(title: string): Promise<Book> {
    const [rows] = await pool.query<ResultSetHeader & Book>(
      "SELECT * FROM books WHERE title = ?;",
      [title]
    );
    return rows[0];
  }

  async update(
    id: string,
    { author, description, title }: Book
  ): Promise<Book> {
    await pool.query(
      "UPDATE books SET title=?, author=?, description=? WHERE id = ?",
      [title, author, description, id]
    );

    const [rows] = await pool.query<ResultSetHeader & Book>(
      "SELECT * FROM books WHERE id = ?;",
      [id]
    );

    return rows[0];
  }
}
