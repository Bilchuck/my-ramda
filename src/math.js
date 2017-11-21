const { curry } = require("./curry");

const add = curry((x, y) => x + y);
const multiply = curry((x, y) => x * y);
const divide = curry((x, y) => x / y);
const minus = curry((x, y) => x - y);

const inc = add(1);

const lt = curry((x, y) => x < y);
const gt = curry((x, y) => x > y);

const eq = curry((x, y) => x === y);
const notEq = curry((x, y) => x !== y);

module.exports = {
    add,
    multiply,
    minus,
    divide,
    inc,
    lt,
    gt,
    eq,
    notEq,
};
