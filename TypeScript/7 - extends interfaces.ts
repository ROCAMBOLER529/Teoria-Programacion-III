import describeBook, { type Book2 } from "./6 - catalogue type.ts";

interface DigitalBook extends Book2 {
    downloadUrl: string;
    sizeInMb: number
};

const ebook: DigitalBook = {
    title: "The Lighthouse at the End of the World",
    author: "Julio Verne",
    year: 1939,
    pages: 529,
    available: true,
    isbn: "15",
    downloadUrl: "www.link.com",
    sizeInMb: 1138
};

const describeDigitalBook = (book: DigitalBook): string => {
    return `${describeBook(book)} ${book.sizeInMb} MB`;
};

console.log(describeDigitalBook(ebook));

export type { DigitalBook };