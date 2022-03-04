import { IBooksRepository } from "../../repositories/IBooksRepository";
import { Book } from "../../entities/Book";

export class GetAllBooksUseCase {
  constructor(private booksRepository: IBooksRepository) {}

  async execute(): Promise<Book[]> {
    return await this.booksRepository.getAllBooks();
  }
}
