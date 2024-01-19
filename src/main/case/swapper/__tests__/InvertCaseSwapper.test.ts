import InvertCaseSwapper from "../InvertCaseSwapper";

describe("InvertCaseSwapper", () => {
  it("'swap' returns Invert string", () => {
    // Given
    const text = "tEsT";
    const invertedText = "TeSt";
    const swapper = new InvertCaseSwapper();
    // When, Then
    expect(swapper.swap(text)).toEqual(invertedText);
  });
});
