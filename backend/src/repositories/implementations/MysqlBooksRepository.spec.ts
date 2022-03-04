import { Book } from "../../entities/Book";
import { IBooksRepository } from "../IBooksRepository";
import { MysqlBooksRepository } from "./MysqlBooksRepository";

describe("Mysql Repository", () => {
  let mysqlBooksRepository: IBooksRepository;

  beforeAll(() => {
    mysqlBooksRepository = new MysqlBooksRepository();
  });

  it("Should be able to add a new book in the database", async () => {
    const newBook = new Book({
      title: "Test title",
      description: "Test description",
      author: "Test author",
    });

    const savedBook = await mysqlBooksRepository.save(newBook);

    expect(savedBook).toEqual(newBook);
  });

  it("Should be able to get a book by its id", async () => {
    const newBook = new Book({
      title: "Test title",
      description: "Test desc",
      author: "Test author",
    });

    await mysqlBooksRepository.save(newBook);

    const foundBook = await mysqlBooksRepository.getBookById(newBook.id);

    expect(foundBook).toEqual(newBook);
  });

  it("Should be able to get a book by its title", async () => {
    const newBook = new Book({
      title: "Test",
      description: "Test descrip",
      author: "Test author",
    });

    await mysqlBooksRepository.save(newBook);

    const foundBook = await mysqlBooksRepository.getBookByTitle(newBook.title);

    expect(foundBook).toEqual(newBook);
  });

  it("Should be able to update a book", async () => {
    const book = new Book({
      title: "Change my title",
      description: "Change my description",
      author: "Change my author",
    });

    const newBookInfo = {
      title: "New title",
      description: "New description",
      author: "New author",
    };

    await mysqlBooksRepository.save(book);

    const updatedBook = await mysqlBooksRepository.update(book.id, newBookInfo);

    expect(updatedBook).toEqual({ ...newBookInfo, id: book.id });
  });

  it("Should be able to delete a book from the database", async () => {
    const book = new Book({
      title: "Delete Me",
      description: "Delete me",
      author: "Delete me",
    });

    await mysqlBooksRepository.save(book);
    const deletedBook = await mysqlBooksRepository.delete(book.id);

    expect(deletedBook).toEqual(book);

    const foundBook = await mysqlBooksRepository.getBookById(book.id);
    expect(foundBook).toBeUndefined();
  });
});
