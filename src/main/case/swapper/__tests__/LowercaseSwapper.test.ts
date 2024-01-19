import LowercaseSwapper from "../LowercaseSwapper";

describe("LowercaseSwapper", () => {
  it("'swap' returns lowercase string", () => {
    // Given
    const text = "tEsT";
    const swapper = new LowercaseSwapper();
    // When, Then
    expect(swapper.swap(text)).toEqual(text.toLowerCase());
  });
});
