import PathCaseSwapper from "../PathCaseSwapper";

const mockSeparateWords = ["path", "case", "word"];
const expectedPathCaseString = "path/case/word";
const mockSeparate = jest.fn().mockImplementation(() => mockSeparateWords);
jest.mock("../WordSeparator", () => {
  return jest.fn().mockImplementation(() => ({
    separate: mockSeparate,
  }));
});

describe("PathCaseSwapper", () => {
  it("returns path case string", () => {
    // Given
    const swapper = new PathCaseSwapper();
    // When, Then
    expect(swapper.swap("mock text")).toEqual(expectedPathCaseString);
  });
});
