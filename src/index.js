// exports
const { curry } = require("./curry");
const { 
    reduceRight,
    reduceLeft,
    foldr,
    foldl,
    map,
    filter,
    forEach,
} = require("./array");
const {
    compose,
} = require("./core");
const {
    minus,
    add,
    divide,
    multiply,
    inc,
} = require("./math");

module.exports = {
    curry,
    reduceRight,
    reduceLeft,
    map,
    filter,
    forEach,
    compose,
    minus,
    add,
    divide,
    multiply,
    inc,
};
