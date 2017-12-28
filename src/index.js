// exports
const { 
    curry,
    __,
} = require("./lib/curry");
const { 
    reduceRight,
    reduceLeft,
    foldr,
    foldl,
    map,
    filter,
    forEach,
} = require("./lib/array");
const { revert } = require("./lib/core");
const { compose } = require("./lib/compose");
const {
    minus,
    add,
    divide,
    multiply,
    inc,
    lt,
    gt,
} = require("./lib/math");
const {
    lens,
    lensIndex,
    lensPath,
    lensProp,
    over,
    set,
    view,
    path,
    prop,
    assoc,
    assocPath,
} = require("./lib/object");

module.exports = {
    curry,
    __,
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
    lens,
    lensIndex,
    lensPath,
    lensProp,
    over,
    set,
    view,
    path,
    prop,
    assoc,
    assocPath,
};
