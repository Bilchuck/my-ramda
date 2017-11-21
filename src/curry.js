const __ = Symbol(`FUNCTION_PlACEHOLDER`);

const curry = fn => (...args) => args.length < fn.length
    ? curry(fn.bind(null, ...args))
    : fn(...args);





module.exports = {
    // TODO: create curryN
    curry,
    __,
}