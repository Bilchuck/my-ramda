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
    zip,
} = require("./lib/array");
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
const { 
    isNil,
    revert,
} = require("./lib/boolean")

module.exports = {
    curry,
    __,
    reduceRight,
    reduceLeft,
    map,
    filter,
    forEach,
    zip,
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
