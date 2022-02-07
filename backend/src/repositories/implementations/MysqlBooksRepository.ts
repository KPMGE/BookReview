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
  async save({ id, title, author, description }: Book): Promise<void> {
    await pool.query(
      "INSERT INTO books (id, title, author, description) VALUES(?,?,?,?);",
      [id, title, author, description]
    );
  }

  async getAllBooks(): Promise<Book[]> {
    const [rows] = await pool.query<IBookMysql[]>("SELECT * FROM books;");
    return rows;
  }

  async delete(id: string): Promise<void> {
    await pool.query("DELETE FROM books WHERE id=?", [id]);
  }

  async getBookById(id: string): Promise<Book> {
    const [rows] = await pool.query<ResultSetHeader & Book>(
      "SELECT * FROM books WHERE id = ?;",
      [id]
    );
    return rows;
  }

  async update(
    id: string,
    { author, description, title }: Book
  ): Promise<void> {
    await pool.query(
      "UPDATE books SET title=?, author=?, description=? WHERE id = ?",
      [title, author, description, id]
    );
  }
}
