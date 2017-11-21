const { equal } = require("assert");
const { curry } = require("../src/index");

describe("curry function", () => {
    it("should curry function", () => {
        const add = curry((x, y) =>  x + y);
        const inc = add(1);
        equal(inc(1), 2);
    });
});
