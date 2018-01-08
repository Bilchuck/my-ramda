const isNil = x => x === null || x === undefined;
const revert = fn => (...args) => !fn(args);

module.exports = {
    isNil,
    revert,
};
