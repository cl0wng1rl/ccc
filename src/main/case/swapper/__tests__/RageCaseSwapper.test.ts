import RageCaseSwapper from "../RageCaseSwapper";

describe("RageCaseSwapper", () => {
  it("'swap' returns Rage string", () => {
    // Given
    const text = "hello world";
    const rageText = "hElLo wOrLd";
    const swapper = new RageCaseSwapper();
    // When, Then
    expect(swapper.swap(text)).toEqual(rageText);
  });
});
