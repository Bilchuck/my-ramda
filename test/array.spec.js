const { 
    curry,
    reduceRight,
    reduceLeft,
    map,
    filter,
} = require("../src");

const add = curry((x, y) => x + y);
const inc = add(1);
// reduces
const arr = [1,2,3,4];
const sum_right = reduceRight(add, 0, arr);
console.log(`sum should be 10 | ${sum_right}`);
const sum_left = reduceLeft(add, 0, arr);
console.log(`sum should be 10 | ${sum_left}`);
// map
const arr_map = [1,2,3,4,5];
const arr_mapped = map(inc, arr_map);
console.log(`mapped array ${arr_mapped.join(`, `)}`);
// filter
const arr_filter = [0,1,2,3,4,5,6];
const lessThenThree = x => x < 3;
const arr_filtered = filter(lessThenThree, arr_filter);
console.log(`Just less then 3 | ${arr_filtered.join(`, `)}`);
