const reverseString = require("./reverseString");

test("string is reversed", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("reverse with capitals", () => {
  expect(reverseString("HeLlO")).toBe("OlLeH");
});

test("reverse with numbers", () => {
  expect(reverseString("123")).toBe("321");
});
