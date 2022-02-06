import { MysqlBooksRepository } from "../../repositories/implementations/MysqlBooksRepository";
import { DeleteBookUseCase } from "./DeleteBookUseCase";
import { DeleteBookController } from "./DeleteBookController";

const booksRepository = new MysqlBooksRepository();
const deleteBookUseCase = new DeleteBookUseCase(booksRepository);
const deleteBookController = new DeleteBookController(deleteBookUseCase);

export { deleteBookController };
