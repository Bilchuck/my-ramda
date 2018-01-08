const { equal, deepEqual } = require("assert");
const { 
    curry,
    reduceRight,
    reduceLeft,
    map,
    filter,
    gt,
    forEach,
    zip,
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
    describe("forEach function", () => {
        it("should run function for every element of array", () => {
            const arr = [0,1,2,3,4,5,6];
            const res = [];
            forEach(x => res.push(x), arr);
            deepEqual(arr, res);
        });
    });
    describe("zip function", () => {
        it("should creates list out of the two supplied by pairing up equally-positioned items from both lists. ", () => {
            const arr1 = [1,2,3];
            const arr2 = [1,2,3, 4];
            const res = zip(arr1, arr2);
            deepEqual(res, [[1,1], [2,2], [3,3]]);
        });
    });
});
