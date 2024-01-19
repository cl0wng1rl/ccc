import UppercaseSwapper from "../UppercaseSwapper";

describe("UppercaseSwapper", () => {
  it("'swap' returns uppercase string", () => {
    // Given
    const text = "tEsT";
    const swapper = new UppercaseSwapper();
    // When, Then
    expect(swapper.swap(text)).toEqual(text.toUpperCase());
  });
});
