import { Book } from "../../entities/Book";
import { IBooksRepository } from "../../repositories/IBooksRepository";
import { ICreateBookRequestDTO } from "./CreateBookDTO";

export class CreateBookUseCase {
  constructor(private booksRepository: IBooksRepository) {}

  async execute({ title, author, description }: ICreateBookRequestDTO) {
    // create new book and save it
    const newBook = new Book({ title, description, author });
    await this.booksRepository.save(newBook);
  }
}
