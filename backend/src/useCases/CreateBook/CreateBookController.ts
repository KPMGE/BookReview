import { Request, Response } from "express";
import { CreateBookUseCase } from "./CreateBookUseCase";

export class CreateBookController {
  constructor(private createBookUseCase: CreateBookUseCase) {}

  async handle(request: Request, response: Response) {
    const { title, description, author } = request.body;

    try {
      await this.createBookUseCase.execute({ title, description, author });
      return response.status(201).send();
    } catch (error) {
      return response.status(400).json({
        message: error.message || "Unexpected error!",
      });
    }
  }
}
