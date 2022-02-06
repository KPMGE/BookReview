import { Request, Response } from "express";
import { Book } from "../../entities/Book";
import { UpdateBookUseCase } from "./UpdateBookUseCase";

export class UpdateBookController {
  constructor(private updateBookUseCase: UpdateBookUseCase) {}

  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { title, description, author } = request.body;

    try {
      const newBook = new Book({title, description, author});

      await this.updateBookUseCase.execute(id, newBook);
      return response.status(200).send();
    } catch (error) {
      return response.status(400).json({
        message: error.message || "Unexpected error!",
      });
    }
  }
}
