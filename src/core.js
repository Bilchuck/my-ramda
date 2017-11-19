const { reduceRight } = require("./array");

const compose = (...fns) => arg => reduceRight(
    (fn, acc) => fn(acc),
    arg,
    fns,
);

module.exports = {
    compose,
}