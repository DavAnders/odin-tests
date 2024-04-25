const capitalize = require("./capitalize");

test("capitalizes first letter", () => {
  expect(capitalize("aaa")).toBe("Aaa");
});
