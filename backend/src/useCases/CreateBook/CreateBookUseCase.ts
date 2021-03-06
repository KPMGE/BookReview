import { Book } from "../../entities/Book";
import { IBooksRepository } from "../../repositories/IBooksRepository";
import { ICreateBookRequestDTO } from "./CreateBookDTO";

export class CreateBookUseCase {
  constructor(private booksRepository: IBooksRepository) {}

  async execute({
    title,
    author,
    description,
  }: ICreateBookRequestDTO): Promise<Book> {
    const foundBook = await this.booksRepository.getBookByTitle(title);
    if (foundBook && foundBook.author === author) {
      throw new Error("This book already exists!");
    }

    // create new book and save it
    const newBook = new Book({ title, description, author });
    const book = await this.booksRepository.save(newBook);

    return book;
  }
}
