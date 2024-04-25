const capitalize = require("./capitalize");

test("capitalizes first letter", () => {
  expect(capitalize("aaa")).toBe("Aaa");
});

test("multiple words", () => {
  expect(capitalize("test words")).toBe("Test words");
});

test("returns an empty string if provided an empty string", () => {
  expect(capitalize("")).toBe("");
});

test("does not change the case of other characters", () => {
  expect(capitalize("javaScript")).toBe("JavaScript");
});

test("handles strings where the first character is not a letter", () => {
  expect(capitalize("123abc")).toBe("123abc");
  expect(capitalize("!hello")).toBe("!hello");
});

"handles null or undefined input gracefully",
  () => {
    expect(capitalize(null)).toBe(null);
    expect(capitalize(undefined)).toBe(undefined);
  };
