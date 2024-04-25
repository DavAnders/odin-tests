const caesarCipher = require("./caesarCipher");

test("shifts letters correctly by positive shift", () => {
  expect(caesarCipher("abc", 3)).toBe("def");
});

test("handles wrapping from z to a correctly", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("maintains spaces and punctuation", () => {
  expect(caesarCipher("hello, world!", 5)).toBe("mjqqt, btwqi!");
});

test("works with negative shifts", () => {
  expect(caesarCipher("def", -3)).toBe("abc");
});

test("returns empty string for empty input", () => {
  expect(caesarCipher("", 5)).toBe("");
});

test("ignores non-alphabet characters", () => {
  expect(caesarCipher("123", 3)).toBe("123");
});

test("handles zero shift (no change)", () => {
  expect(caesarCipher("abc", 0)).toBe("abc");
});

test("works with large shifts (testing shift > 26)", () => {
  expect(caesarCipher("abc", 29)).toBe("def"); // 29 % 26 = 3
});
