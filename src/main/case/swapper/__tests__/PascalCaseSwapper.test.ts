import PascalCaseSwapper from "../PascalCaseSwapper";

const mockSeparateWords = ["pascal", "case", "word"];
const expectedPascalCaseString = "PascalCaseWord";
const mockSeparate = jest.fn().mockImplementation(() => mockSeparateWords);
jest.mock("../WordSeparator", () => {
  return jest.fn().mockImplementation(() => ({
    separate: mockSeparate,
  }));
});

describe("PascalCaseSwapper", () => {
  it("returns pascal case string", () => {
    // Given
    const swapper = new PascalCaseSwapper();
    // When, Then
    expect(swapper.swap("mock text")).toEqual(expectedPascalCaseString);
  });
});
