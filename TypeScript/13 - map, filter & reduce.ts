import { type Book2 } from "./6 - catalogue type.ts";

const books: Book2[] = [
    { title: "Games of Thrones", author: "J. J. Martin", year: 2010, pages: 617, available: true, isbn: "123"},
    { title: "El Lazarillo de Tormes", author: "", year: 1522, pages: 138, available: false, isbn: "456"},
    { title: "A Little History of Religion", author: "Richard Holloway", year: 2015, pages: 356, available: true, isbn: "789"},
    { title: "The Sovereign of the Nile", author: "Wilbur Smith", year: 1966, pages: 748, available: false, isbn: "135"},
    { title: "The Prince", author: "Machiavelus", year: 1589, pages: 221, available: true, isbn: "246"},
    { title: "God of the Flames", author: "RF Kuang", year: 1999, pages: 437, available: true, isbn: "22"}
];

console.log(books.map(x => x.title));
console.log((books.filter(x => x.available).map(x => x.title)));
console.log(books.reduce((total, y) => total + y.pages, 0));