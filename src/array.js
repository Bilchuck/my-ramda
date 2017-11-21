const { curry } = require("./curry");
const { revert }= require("./core");
const { gt } = require("./math");

const reduceRight = curry((fn, start, list) => {
    if (list.length === 0) {
        return start;
    } else {
        const [x, ...xs] = list;
        return fn(x, reduceRight(fn, start, xs));
    }
});
const reduceLeft = curry((fn, start, list) => {
    if (list.length === 0) {
        return start;
    }
    const [x, ...xs] = list;
    return reduceLeft(fn, fn(start, x), xs)
});
const foldr = reduceRight;
const foldl = reduceLeft;
const map = curry((fn, xs) => 
    reduceRight(
        (x, acc) => [fn(x), ...acc], 
        [], 
        xs
    )
);
const filter = curry((fn, xs) => 
    reduceRight(
        (x, acc) => fn(x) ? [x, ...acc] : acc,
        [],
        xs,
    )
);
const forEach = curry((fn, xs) => 
    reduceRight(
        (x, acc) => fn(x),
        null,
        xs,
    )
);
const arrayMerge = curry((xs, ys) => [...xs, ...ys]);

const sort = (fn = gt, arr) => {
    const [x, ...xs] = arr;
    switch (arr.length) {
        case 0: return [];
        case 1: return [x];
        default: return [...sort(filter(fn(x), xs)), x, ...sort(filter(revert(fn(x)), xs))];
    }
}


module.exports = {
    reduceRight,
    reduceLeft,
    foldr,
    foldl,
    map,
    filter,
    forEach,
};
