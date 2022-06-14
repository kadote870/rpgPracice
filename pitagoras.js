const a = 10;
const b = 20;

const c2 = Math.pow(a, 2) + Math.pow(b, 2);

const c = Math.sqrt(c2);

const cFixed2 = c.toFixed(2);

console.log(`
c2 = ${c2};
c = ${c};
c = ${c.toFixed(2)};
c = ${c.toFixed(1)};
`);

console.log('c2 = ', c2);
console.log('c = ', c);
console.log('c = ', c.toFixed(2));
console.log('c = ', c.toFixed(1));