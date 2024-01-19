import ConstantCaseSwapper from "../ConstantCaseSwapper";

const mockSeparateWords = ["constant", "case", "word"];
const expectedConstantCaseString = "CONSTANT_CASE_WORD";
const mockSeparate = jest.fn().mockImplementation(() => mockSeparateWords);
jest.mock("../WordSeparator", () => {
  return jest.fn().mockImplementation(() => ({
    separate: mockSeparate,
  }));
});

describe("ConstantCaseSwapper", () => {
  it("returns constant case string", () => {
    // Given
    const swapper = new ConstantCaseSwapper();
    // When, Then
    expect(swapper.swap("mock text")).toEqual(expectedConstantCaseString);
  });
});
