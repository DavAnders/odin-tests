const calculator = require("./calculator");

test("sum two numbers", () => {
  expect(calculator.add(20, 40)).toBe(60);
});

test("only sum numbers", () => {
  expect(calculator.add("20", 40)).toBe("Invalid input");
});

test("subtract two numbers", () => {
  expect(calculator.subtract(40, 40)).toBe(0);
});

test("only subtract numbers", () => {
  expect(calculator.add("20", 40)).toBe("Invalid input");
});

test("divide two numbers", () => {
  expect(calculator.divide(40, 20)).toBe(2);
});

test("only divide numbers", () => {
  expect(calculator.add("20", 40)).toBe("Invalid input");
});

test("multiply two numbers", () => {
  expect(calculator.multiply(20, 40)).toBe(800);
});

test("only multiply numbers", () => {
  expect(calculator.multiply("20", 40)).toBe("Invalid input");
});
