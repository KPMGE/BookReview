import { Request, Response } from "express";
import { DeleteBookUseCase } from "./DeleteBookUseCase";

export class DeleteBookController {
  constructor(private deleteBookUseCase: DeleteBookUseCase) {}

  async handle(request: Request, response: Response) {
    const { id } = request.params;

    try {
      await this.deleteBookUseCase.execute(id);
      return response.status(202).send();
    } catch (error) {
      return response.status(400).json({
        message: error.message || "Unexpected error!",
      });
    }
  }
}
