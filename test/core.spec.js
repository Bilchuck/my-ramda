const { compose, curry } = require("../src");
const assert = require("assert");

const add = curry((x, y) => x + y);
const multy = curry((x, y) => x * y);
describe("core functions", () => {
    describe("compose", () => {
        it("should compose functions", () => {
            const fn = compose(
                add(1),
                add(1),
                add(1),
            );
            const num = 3;
            const expected = fn(num);
            assert.equal(expected, 6);
        });
        it("should call functions from last to first", () => {
            const fn = compose(
                add(2),
                multy(2),
            );
            const num = 3;
            const expected = fn(num);
            assert.equal(expected, 8);
        });
    });
});