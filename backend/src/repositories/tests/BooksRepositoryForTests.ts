import { Book } from "../../entities/Book";
import { IBooksRepository } from "../IBooksRepository";

export class BooksRepositoryForTests implements IBooksRepository {
  private books: Book[] = [];

  async save(book: Book): Promise<Book> {
    this.books.push(book);
    return book;
  }

  async delete(id: string): Promise<Book> {
    const foundBook = this.books.find((book) => book.id === id);

    this.books = this.books.filter((book) => book.id !== id);

    return foundBook;
  }

  async update(
    id: string,
    { title, description, author }: Book
  ): Promise<Book> {
    const foundBook = this.books.find((book) => book.id === id);

    foundBook.title = title;
    foundBook.author = author;
    foundBook.description = description;

    return foundBook;
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
