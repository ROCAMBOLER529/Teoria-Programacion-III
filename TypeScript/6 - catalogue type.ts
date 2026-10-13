interface Book2 {
    title: string;
    author: string;
    year: number;
    pages: number;
    available: boolean;
    readonly isbn: string;
}

const books: Book2[] = [
    { title: "Games of Thrones", author: "J. J. Martin", year: 2010, pages: 617, available: true, isbn: "123"},
    { title: "El Lazarillo de Tormes", author: "", year: 1522, pages: 138, available: false, isbn: "456"},
    { title: "A Little History of Religion", author: "Richard Holloway", year: 2015, pages: 356, available: true, isbn: "789"},
    { title: "The Sovereign of the Nile", author: "Wilbur Smith", year: 1966, pages: 748, available: false, isbn: "135"},
    { title: "The Prince", author: "Machiavelus", year: 1589, pages: 221, available: true, isbn: "246"},
    { title: "God of the Flames", author: "RF Kuang", year: 1999, pages: 437, available: true, isbn: "22"}
];

const describeBook = (book: Book2): string => {
    return `${book.title} (${book.year})`;
}

console.log(describeBook(books[0]));
console.log(describeBook(books[1]));
console.log(describeBook(books[3]));

export type { Book2 };
export default describeBook;