import { BooksRepositoryForTests } from "../../repositories/tests/BooksRepositoryForTests";
import { GetAllBooksUseCase } from "./GetAllBooksUseCase";

describe("GetAllBooksUseCase", () => {
  const booksRepository = new BooksRepositoryForTests();
  const getAllBooksUseCase = new GetAllBooksUseCase(booksRepository);

  it("Should be able to get all books from dataset", async () => {
    const books = await getAllBooksUseCase.execute();
    expect(books).toEqual([]);
  });
});
