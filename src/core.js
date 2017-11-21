const revert = fn => (...args) => !fn(args);

module.exports = {
    revert,
}