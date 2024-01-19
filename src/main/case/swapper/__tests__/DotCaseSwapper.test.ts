import DotCaseSwapper from "../DotCaseSwapper";

const mockSeparateWords = ["dot", "case", "word"];
const expectedDotCaseString = "dot.case.word";
const mockSeparate = jest.fn().mockImplementation(() => mockSeparateWords);
jest.mock("../WordSeparator", () => {
  return jest.fn().mockImplementation(() => ({
    separate: mockSeparate,
  }));
});

describe("DotCaseSwapper", () => {
  it("returns dot case string", () => {
    // Given
    const swapper = new DotCaseSwapper();
    // When, Then
    expect(swapper.swap("mock text")).toEqual(expectedDotCaseString);
  });
});
