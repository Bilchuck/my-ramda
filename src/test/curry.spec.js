const { equal } = require("assert");
const { 
    curry,
    __,
} = require("../index");

describe("curry function", () => {
    it("should curry function", () => {
        const add = curry((x, y) =>  x + y);
        const inc = add(1);
        equal(inc(1), 2);
    });
    it("should curry function with 3 args", () => {
        const add = curry((x,y,z) => x + y + z);
        const hello = add('Hello, ', __, '. How are you?');
        equal(hello('Anton'), 'Hello, Anton. How are you?');
    });
});
