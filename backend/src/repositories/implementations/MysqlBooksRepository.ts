import { Book } from "../../entities/Book";
import { IBooksRepository } from "../IBooksRepository";
import { createPool } from "mysql2/promise";

// Create the connection pool. 
const pool = createPool({
  host: "localhost",
  user: "root",
  database: "books_review",
  password: '1234',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export class MysqlBooksRepository implements IBooksRepository {
  async save({ id, title, author, description }: Book): Promise<void> {
    console.log("TEST: ", id, title, author, description);
    await pool.query(
      "INSERT INTO books (id, title, author, description) VALUES(?,?,?,?);",
      [id, title, author, description]
    );
  }
}
