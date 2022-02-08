import { IBooksRepository } from "../../repositories/IBooksRepository";
import { BooksRepositoryForTests } from "../../repositories/tests/BooksRepositoryForTests";
import { ICreateBookRequestDTO } from "./CreateBookDTO";
import { CreateBookUseCase } from "./CreateBookUseCase";

describe("CreateUserUseCase", () => {
  let booksRepository: IBooksRepository;
  let createBookUseCase: CreateBookUseCase;

  beforeAll(() => {
    booksRepository = new BooksRepositoryForTests();
    createBookUseCase = new CreateBookUseCase(booksRepository);
  });

  it("Should be able to create a book", async () => {
    const savedBook = await createBookUseCase.execute({
      title: "Test title",
      author: "Test author",
      description: "Test description",
    });

    expect(savedBook).toHaveProperty("id");
    expect(savedBook).toEqual({
      ...savedBook,
      id: savedBook.id,
    });
  });

  it("Shouldn't be able to create a book with the same title and author", async () => {
    const bookData: ICreateBookRequestDTO = {
      title: "Test title 2",
      author: "Test author 2",
      description: "Test description 2",
    };

    await createBookUseCase.execute(bookData);
    await expect(createBookUseCase.execute(bookData)).rejects.toThrowError(
      new Error("This book already exists!")
    );
  });
});
