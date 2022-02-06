import { IBooksRepository } from "../../repositories/IBooksRepository";

export class DeleteBookUseCase {
  constructor(private booksRepository: IBooksRepository){}

  async execute(id: string) {
    await this.booksRepository.delete(id);
  }
}
