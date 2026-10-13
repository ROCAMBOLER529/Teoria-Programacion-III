const defaultBook = { available: true, pages: 100 };
defaultBook.available = false;

const defaultBook2 = { available: true, pages: 100 } as const; // los valores son readonly
// defaultBook2.available = false; ==> "Cannot assign to 'available' because it is a read-only property."
