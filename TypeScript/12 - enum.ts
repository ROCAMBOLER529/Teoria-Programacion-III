enum BookGenre {
    Fiction = 'fiction',
    NonFiction = 'non-fiction',
    Reference = 'reference'
};

interface Book3 {
    title: string;
    author: string;
    year: number;
    pages: number;
    available: boolean;
    readonly isbn: string;
    genre: BookGenre
};

const isFiction = (book: Book3): boolean => {
    return book.genre === BookGenre.Fiction;
}

const book: Book3[] = [
    { title: "Games of Thrones", author: "J. J. Martin", year: 2010, pages: 617, available: true, isbn: "123", genre: BookGenre.Fiction},
    { title: "El Lazarillo de Tormes", author: "", year: 1522, pages: 138, available: false, isbn: "456", genre: BookGenre.NonFiction},
]

console.log(isFiction(book[0]));
console.log(isFiction(book[1]));