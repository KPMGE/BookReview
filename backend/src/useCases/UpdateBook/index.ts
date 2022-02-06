import { MysqlBooksRepository } from "../../repositories/implementations/MysqlBooksRepository";
import { UpdateBookController } from "./UpdateBookController";
import { UpdateBookUseCase } from "./UpdateBookUseCase";

const booksRepository = new MysqlBooksRepository();
const updateBookUseCase = new UpdateBookUseCase(booksRepository);
const updateBookController = new UpdateBookController(updateBookUseCase);

export { updateBookController };
