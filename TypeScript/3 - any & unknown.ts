let raw: any = 'hola';
console.log(raw.toUpperCase());
// raw(); ==> Error en runtime

let value: unknown = 'hola';

if (typeof value === 'string') {
    value.toUpperCase();
    console.log((value as string).toUpperCase()); // Es necesario poner el 'as' porque le confirma al compilador que es un string
}
// value.toUpperCase(); ==> Error de compliacion

