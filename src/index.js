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

module.exports = {
    curry,
    reduceRight,
    reduceLeft,
    map,
    filter,
    forEach,
    compose,
};
