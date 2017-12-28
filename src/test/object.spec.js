const { equal } = require("assert");
const { 
    path,
    prop,
    assoc,
    assocPath,
    lensIndex,
    lensPath,
    lensProp,
    over,
    set,
    view,
} = require("../index");

describe("object functions", () => {
    let obj;

    beforeEach(() => {
        obj = {
            x: 1,
            y: {
                z: 2,
            },
        };
    });

    describe("prop", () => {
        it("should get value of object by property", () => {
            equal(1, prop('x', obj));
        });
    })
    describe("path", () => {
        it("should get value of object by array of properties", () => {
            equal(2, path(['y', 'z'], obj));
        });
    })
    describe("assoc", () => {
        it("should set value of object by property", () => {
            const newValue = 13;
            const changed = assoc('x', newValue, obj);
            equal(changed['x'], newValue);
        });
    })
    describe("assocPath", () => {
        it("should set value of object by array of properties", () => {
            const newValue = 13;
            const changed = assocPath(['y', 'z'], newValue, obj);
            equal(changed['y']['z'], newValue);
        });
    })
    describe("over", () => {
        it("should change property of object using function and lens", () => {
            const fn = x => x + 1;
            const changed = over(lensProp('x'), fn, obj);
            equal(changed['x'], 2);
        });
    })
    describe("set", () => {
        it("should change property of object using lens", () => {
            const newValue = 100;
            const changed = set(lensIndex(1), 100, [1,2,3]);
            equal(changed[1], newValue);
        });
    })
    describe("view", () => {
        it("should get value of object properties using lens", () => {
            equal(view(lensPath(['y','z']), obj), 2);
        });
    })
});
