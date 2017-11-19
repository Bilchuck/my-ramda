const { curry } = require('../src');

const add = curry((x, y) => {
    return x + y;
});

const inc = add(1);

console.log(`CURRYING`)
console.log(`inc(3) == ${inc(3)}`);
console.log(`inc(3) == 4 | ${inc(3) === 4}`);
console.log(`===============================`)