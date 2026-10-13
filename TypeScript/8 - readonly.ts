import { type Book2 } from "./6 - catalogue type.ts";

const updateTitle = (book: Book2, title: string): void => {
    book.title = title;
    // book.isbn = "6" ==> "Cannot assign to 'isbn' because it is a read-only property."
}

const isbns: readonly string[] = ["22", "15", "6"];
// isbns.push() ==> "Property 'push' does not exist on type 'readonly string[]'."

console.log(isbns);