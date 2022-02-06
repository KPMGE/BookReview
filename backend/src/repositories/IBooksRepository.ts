import { Book } from "../entities/Book";

export interface IBooksRepository {
  save(book: Book): Promise<void>;
}
