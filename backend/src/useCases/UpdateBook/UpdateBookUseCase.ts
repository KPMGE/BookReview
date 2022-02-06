import { Book } from "../../entities/Book";
import { IBooksRepository } from "../../repositories/IBooksRepository";

export class UpdateBookUseCase {
  constructor(private booksRepository: IBooksRepository){}

  async execute(id: string, newBook: Book ) {
    await this.booksRepository.update(id, newBook);
  }
}
