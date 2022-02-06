import { Request, Response, Router } from "express";
import { createBookController } from "./useCases/CreateBook";

const routes = Router();

routes.post("/books/new", (request: Request, response: Response) => {
  createBookController.handle(request, response);
});

export { routes };
