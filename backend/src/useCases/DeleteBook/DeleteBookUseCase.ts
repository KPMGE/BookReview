import { Book } from "../../entities/Book";
import { IBooksRepository } from "../../repositories/IBooksRepository";

export class DeleteBookUseCase {
  constructor(private booksRepository: IBooksRepository) {}

  async execute(id: string): Promise<Book> {
    const foundBook = await this.booksRepository.getBookById(id);

    if (!foundBook) {
      throw new Error("Book not found!");
    }

    return await this.booksRepository.delete(id);
  }
}
