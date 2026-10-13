interface Book {
    title: string;
    pages?: number
};

const pageCount = (book: Book): number => {
    return book.pages ?? 0; // Poner el or de comparacion (||) sería un error porque pisaría el valor de 0, mientras que el ?? ocurre para undefinded
}

console.log(pageCount({ title: "Game of Thrones", pages: 671}));
console.log(pageCount({ title: "El Lazarillo de Tormes"}));