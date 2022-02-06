import { v4 as uuid } from "uuid";

export class Book {
  public readonly id: string;
  public title: string;
  public author: string;
  public description: string;

  // omits the 'id' property, so now it's an optional property.
  constructor(book: Omit<Book, "id">, id?: string) {
    Object.assign(this, book);

    // if not provided, generate a unique id for the book
    if (!id) {
      this.id = uuid();
    }
  }
}
