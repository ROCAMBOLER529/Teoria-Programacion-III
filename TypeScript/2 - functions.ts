const formatPrice = (amount: number, currency: string = 'ARS'): string => {
    return "$" + amount + " " + currency;
}

const sumAll = (...numbers: number[]): number => {
    return numbers.reduce((a, b) => a + b);
}

const logWarning = (message: string, code?: number): void => {
    console.log(`Error: ${message} en linea: ${code ? code : "??"}`);
}

console.log(formatPrice(22, 'USD'));
console.log(formatPrice(15));

console.log(sumAll(22, 15, 6));
console.log(sumAll(22, 15, 6, 36));

logWarning("SyntaxException", 22);
logWarning("ArityException");