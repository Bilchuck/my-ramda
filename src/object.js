const { curry } = require("./curry");

const prop = curry((key, obj) => obj[key]);

