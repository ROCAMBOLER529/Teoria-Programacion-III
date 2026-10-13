type Status = 'pending' | 'shipped' | 'delivered';

const describeId = (id: string | number): string => {
    if (typeof id === 'number') {
        return `ID numerico: ${id}`;
    } else {
        return `ID de texto: ${id}`;
    }
}

const statusEmoji = (status: Status): string => {
    switch(status) {
        case 'pending':
            return "❕";
        case 'shipped':
            return '🚚';
        case 'delivered':
            return '✅';
    }
}

console.log(describeId(22));
console.log(describeId("miasma"));

console.log(statusEmoji('pending'));
console.log(statusEmoji('delivered'));
// console.log(statusEmoji('canceled')); ==> Error: no asignable a Status