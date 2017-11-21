const { equal } = require("assert");
const { compose, curry, add, multiply } = require("../src/index");

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
            equal(expected, 6);
        });
        it("should call functions from last to first", () => {
            const fn = compose(
                add(2),
                multiply(2),
            );
            const num = 3;
            const expected = fn(num);
            equal(expected, 8);
        });
    });
});
