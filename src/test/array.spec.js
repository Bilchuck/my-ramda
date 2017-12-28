const { equal, deepEqual } = require("assert");
const { 
    curry,
    reduceRight,
    reduceLeft,
    map,
    filter,
    gt,
} = require("../index");

const add = curry((x, y) => x + y);
const inc = add(1);
describe("array functions", () => {
    describe("reduce left functions", () => {
        it("should reduce array from left side", () => {
            const arr = [1,2,3,4];
            const sum = reduceLeft(add, 0, arr);
            equal(sum, 10);
        });
    });
    describe("reduce right functions", () => {
        it("should reduce array from right side", () => {
            const arr = [1,2,3,4];
            const sum = reduceRight(add, 0, arr);
            equal(sum, 10);
        });
    });
    describe("map function", () => {
        it("should create new array with function applied to every item", () => {
            const arr = [1,2,3,4,5];
            const arr_mapped = map(inc, arr);
            deepEqual(arr_mapped, [2,3,4,5,6]);
        });
    });
    describe("filter function", () => {
        it("should filter array using function from param", () => {
            const arr = [0,1,2,3,4,5,6];
            const arr_filtered = filter(gt(3), arr);
            deepEqual(arr_filtered, [0,1,2]);
        });
    });
});
