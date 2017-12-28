const { curry } = require("./curry");
const { index } = require("./array");

const _set = Symbol("set");
const _get = Symbol("set");

const prop = curry((key, obj) => obj[key]);
const path = curry(([key, ...tail], obj) => tail.length 
  ? path(tail, prop(key, obj))
  : prop(key, obj));

const assoc = curry((key, val, obj) => ({...obj, [key]: val}));
const assocPath = curry(([key, ...tail], val, obj) => tail.length 
  ? {...obj, [key]: assocPath(tail, val, prop(key, obj))}
  : assoc(key, val, obj));

const lens = (get, set) => ({
  [_set]: set,
  [_get]: get,
});
const lensProp = key => lens(prop(key), assoc(key));
const lensPath = keys => lens(path(keys), assocPath(keys));
const lensIndex = lensProp;

// Functions that wors with lens
const over = curry((lens, fn, obj) => prop(_set, lens)(fn(prop(_get, lens)(obj)), obj));
const set = curry((lens, val, obj) => prop(_set, lens)(val, obj));
const view = curry((lens, obj) => prop(_get, lens)(obj));

module.exports = {
  lens,
  lensPath,
  lensProp,
  lensIndex,
  over,
  set,
  view,
  path,
  prop,
  assoc,
  assocPath,
};
