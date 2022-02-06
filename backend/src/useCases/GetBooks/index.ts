import { MysqlBooksRepository } from "../../repositories/implementations/MysqlBooksRepository";
import { GetAllBooksUseCase } from "./GetAllBooksUseCase";
import { GetAllBooksController } from "./GetAllBooksController";

const booksRepository = new MysqlBooksRepository();
const getBooksUseCase = new GetAllBooksUseCase(booksRepository);
const getAllBooksController = new GetAllBooksController(getBooksUseCase);

export { getAllBooksController };
