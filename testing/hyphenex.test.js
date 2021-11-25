const hyphenex = require("../hyphenex");

describe('Testing functions', () => {
  test("hyphenate this string", () => {
    expect(hyphenex.hyphenate("hyphenate this string")).toBe(
      "hyphenate-this-string"
    );
  });
  test("dehyphenate this string", () => {
    expect(hyphenex.deHyphenate("hyphenate-this-string")).toBe(
      "hyphenate this string"
    );
  });
  test('Dynamically hyphenate this string', () => {
    expect(hyphenex.hyphenateDynamically("This string will be hyphenated dynamically", "_")).toBe(
      "This_string_will_be_hyphenated_dynamically"
    );
  });
  test('Dynamically dehyphenate this string', () => {
    expect(hyphenex.deHyphenateDynamically("This+string+will+be+dehyphenated+dynamically", "+")).toBe(
      "This string will be dehyphenated dynamically"
    )
  });
});
