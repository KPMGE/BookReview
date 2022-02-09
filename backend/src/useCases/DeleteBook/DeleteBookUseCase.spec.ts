import { IBooksRepository } from "../../repositories/IBooksRepository";
import { BooksRepositoryForTests } from "../../repositories/tests/BooksRepositoryForTests";
import { CreateBookUseCase } from "../CreateBook/CreateBookUseCase";
import { DeleteBookUseCase } from "./DeleteBookUseCase";

describe("Delete Book", () => {
  let booksRepository: IBooksRepository;
  let createBooksUseCase: CreateBookUseCase;
  let deleteBooksUseCase: DeleteBookUseCase;

  beforeAll(() => {
    booksRepository = new BooksRepositoryForTests();
    createBooksUseCase = new CreateBookUseCase(booksRepository);
    deleteBooksUseCase = new DeleteBookUseCase(booksRepository);
  });

  it("Should be able to delete a book", async () => {
    const newBook = await createBooksUseCase.execute({
      title: "Test title",
      description: "Test description",
      author: "Test author",
    });

    const deletedBook = await deleteBooksUseCase.execute(newBook.id);

    expect(deletedBook).toEqual(newBook);
  });

  it("Should throw an error when the wrong id is provided", async () => {
    await expect(
      deleteBooksUseCase.execute("some_wrong_id")
    ).rejects.toThrowError(new Error("Book not found!"));
  });
});
