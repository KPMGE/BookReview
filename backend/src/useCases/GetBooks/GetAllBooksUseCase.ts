import { IBooksRepository } from "../../repositories/IBooksRepository";

export class GetAllBooksUseCase {
  constructor(private booksRepository: IBooksRepository){}

  async execute() {
    const books = await this.booksRepository.getAllBooks();
    return books;
  }
}

