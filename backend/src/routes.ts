import { Request, Response, Router } from "express";
import { createBookController } from "./useCases/CreateBook";
import { deleteBookController } from "./useCases/DeleteBook";
import { getAllBooksController } from "./useCases/GetBooks";
import { updateBookController } from './useCases/UpdateBook'

const routes = Router();

routes.get("/books", (request: Request, response: Response) => {
  getAllBooksController.handle(request, response);
});

routes.post("/books/new", (request: Request, response: Response) => {
  createBookController.handle(request, response);
});

routes.delete("/books/delete/:id", (request: Request, response: Response) => {
  deleteBookController.handle(request, response);
});

routes.put('/books/update/:id', (request: Request, response: Response) => {
  updateBookController.handle(request, response);
});

export { routes };
