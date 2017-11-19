const { curry } = require("./");

const add = curry((x, y) => x + y);
const multiply = curry((x, y) => x * y);
const divide = curry((x, y) => x / y);
const minus = curry((x, y) => x - y);

const inc = add(1);

module.exports = {
    add,
    multiply,
    minus,
    divide,
    inc,
};
