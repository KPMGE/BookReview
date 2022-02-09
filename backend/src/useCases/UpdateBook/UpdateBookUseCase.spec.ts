import { BooksRepositoryForTests } from "../../repositories/tests/BooksRepositoryForTests";
import { CreateBookUseCase } from "../CreateBook/CreateBookUseCase";
import { UpdateBookUseCase } from "./UpdateBookUseCase";

describe("Update Book", () => {
  it("should be able to update a book", async () => {
    const booksRepository = new BooksRepositoryForTests();
    const createBookUseCase = new CreateBookUseCase(booksRepository);
    const updateBookUseCase = new UpdateBookUseCase(booksRepository);

    const createdBook = await createBookUseCase.execute({
      title: "Test title",
      author: "Test author",
      description: "Test description",
    });

    const newBook = {
      title: "New title",
      author: "New author",
      description: "New description",
    };

    const updatedBook = await updateBookUseCase.execute(
      createdBook.id,
      newBook
    );

    expect(updatedBook).toEqual({ ...newBook, id: createdBook.id });
  });
});
