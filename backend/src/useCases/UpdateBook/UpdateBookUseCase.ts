import { IBooksRepository } from "../../repositories/IBooksRepository";
import { IUpdateBookRequestDTO } from "./UpdateBookDTO";

export class UpdateBookUseCase {
  constructor(private booksRepository: IBooksRepository) {}

  async execute(id: string, newBook: IUpdateBookRequestDTO) {
    return await this.booksRepository.update(id, newBook);
  }
}
