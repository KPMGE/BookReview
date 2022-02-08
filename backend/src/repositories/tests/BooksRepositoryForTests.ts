import { Book } from "../../entities/Book";
import { IBooksRepository } from "../IBooksRepository";

export class BooksRepositoryForTests implements IBooksRepository {
  private books: Book[] = [];

  async save(book: Book): Promise<Book> {
    this.books.push(book);
    return book;
  }

  async delete(id: string): Promise<void> {
    this.books = this.books.filter((book) => book.id !== id);
  }

  async update(id: string, book: Book): Promise<void> {
    const foundBook = this.books.find((book) => book.id === id);
    foundBook.title = book.title;
    foundBook.author = book.author;
    foundBook.description = book.description;
  }

  async getAllBooks(): Promise<Book[]> {
    return this.books;
  }

  async getBookById(id: string): Promise<Book> {
    return this.books.find((book) => book.id === id);
  }

  async getBookByTitle(title: string): Promise<Book> {
    return this.books.find((book) => book.title === title);
  }
}
