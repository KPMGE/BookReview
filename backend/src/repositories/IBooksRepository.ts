import { Book } from "../entities/Book";

export interface IBooksRepository {
  save(book: Book): Promise<Book>;
  getBookByTitle(title: string): Promise<Book>;
  getAllBooks(): Promise<Book[]>;
  delete(id: string): Promise<Book>;
  getBookById(id: string): Promise<Book>;
  update(id: string, book: Omit<Book, "id">): Promise<Book>;
}
