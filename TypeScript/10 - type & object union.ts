type EBook = {
    title: string,
    downloadUrl: string
};

type PrintedBook = {
    title: string,
    pages: number
}

type AnyBook = EBook | PrintedBook;

const describeAnyBook = (anyBook: AnyBook): string => {
    if ('downloadUrl' in anyBook) {
        return "This is a ebook";
    } else {
        return "This is a printed book";
    }
}

console.log(describeAnyBook({ title: "Los Mejores Cuentos Argentinos", pages: 886}));
console.log(describeAnyBook({ title: "The History of Carthage", downloadUrl: "www.book.com"}));