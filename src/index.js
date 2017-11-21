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
const { revert } = require("./core");
const { compose } = require("./compose");
const {
    minus,
    add,
    divide,
    multiply,
    inc,
    lt,
    gt,
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
    lt,
    gt,
    revert,
};
