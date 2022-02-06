import { MysqlBooksRepository } from "../../repositories/implementations/MysqlBooksRepository";
import { CreateBookController } from "./CreateBookController";
import { CreateBookUseCase } from "./CreateBookUseCase";

const booksRepository = new MysqlBooksRepository();
const createBookUseCase = new CreateBookUseCase(booksRepository);
const createBookController = new CreateBookController(createBookUseCase);

export { createBookController };
