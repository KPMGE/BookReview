import {Request, Response} from 'express';
import { GetAllBooksUseCase } from './GetAllBooksUseCase';

export class GetAllBooksController {
  constructor(private getAllBooksUseCase: GetAllBooksUseCase) {}

  async handle(request: Request, response: Response) {
    try {
      const books = await this.getAllBooksUseCase.execute();
      return response.status(200).json(books);
    } catch (error) {
      return response.status(400).json({
        message: error.message || "Unexpected error"
      })
    }
  }
}
