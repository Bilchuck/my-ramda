const __ = Symbol(`FUNCTION_PlACEHOLDER`);

const curryN = fn => curryFunction(fn, []);
const curryFunction = (fn, oldArgs) => (...newArgs) => {
    const args = concatArgs(oldArgs, newArgs);
    if (args.length !== lenArgs(args) || args.length !== fn.length) {
        return curryFunction(fn, args);
    } else {
        return fn.apply(null, args);
    }
}
const concatArgs = (args1, args2) => {
    const args = [];
    for (const arg of args1) {
        if (arg !== __ || args2.length === 0) {
            args.push(arg);
        } else {
            args.push(args2.shift());
        }
    }
    return args.concat(args2);
}
const lenArgs = args => args.filter(a => a !== __).length;

module.exports = {
    curry: curryN,
    __,
};
