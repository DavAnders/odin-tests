const analyzeArray = require("./analyzeArray");

test("correct statistics for an array of numbers", () => {
  expect(analyzeArray([1, 2, 3, 4, 5])).toEqual({
    average: 3,
    min: 1,
    max: 5,
    len: 5,
  });
});

test("ignores non-number elements and calculates correctly", () => {
  expect(analyzeArray([1, "two", 3, null, 5, undefined, "6", false])).toEqual({
    average: 3,
    min: 1,
    max: 5,
    len: 3,
  });
});

test("returns zero average and undefined min/max for non-numeric arrays", () => {
  expect(analyzeArray(["a", "b", "c"])).toEqual({
    average: 0,
    min: undefined,
    max: undefined,
    len: 0,
  });
});

test("handles an empty array", () => {
  expect(analyzeArray([])).toEqual({
    average: 0,
    min: undefined,
    max: undefined,
    len: 0,
  });
});

test("throws an error if input is not an array", () => {
  expect(() => analyzeArray("not an array")).toThrow("Input must be an array.");
});

test("handles arrays with only NaN and undefined properly", () => {
  expect(analyzeArray([NaN, undefined, NaN])).toEqual({
    average: 0,
    min: undefined,
    max: undefined,
    len: 0,
  });
});

test("processes arrays with Boolean values, treating them as non-numeric", () => {
  expect(analyzeArray([true, false, 5, 10])).toEqual({
    average: 7.5,
    min: 5,
    max: 10,
    len: 2,
  });
});

test("processes arrays with large and negative numbers", () => {
  expect(analyzeArray([-10, 0, 100, 50])).toEqual({
    average: 35,
    min: -10,
    max: 100,
    len: 4,
  });
});
