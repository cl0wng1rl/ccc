import KebabCaseSwapper from "../KebabCaseSwapper";

const mockSeparateWords = ["kebab", "case", "word"];
const expectedKebabCaseString = "kebab-case-word";
const mockSeparate = jest.fn().mockImplementation(() => mockSeparateWords);
jest.mock("../WordSeparator", () => {
  return jest.fn().mockImplementation(() => ({
    separate: mockSeparate,
  }));
});

describe("KebabCaseSwapper", () => {
  it("returns kebab case string", () => {
    // Given
    const swapper = new KebabCaseSwapper();
    // When, Then
    expect(swapper.swap("mock text")).toEqual(expectedKebabCaseString);
  });
});
