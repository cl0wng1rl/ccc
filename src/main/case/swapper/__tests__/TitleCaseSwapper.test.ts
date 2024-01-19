import TitleCaseSwapper from "../TitleCaseSwapper";

const mockSeparateWords = ["title", "case", "word"];
const expectedTitleCaseString = "Title Case Word";
const mockSeparate = jest.fn().mockImplementation(() => mockSeparateWords);
jest.mock("../WordSeparator", () => {
  return jest.fn().mockImplementation(() => ({
    separate: mockSeparate,
  }));
});

describe("TitleCaseSwapper", () => {
  it("returns title case string", () => {
    // Given
    const swapper = new TitleCaseSwapper();
    // When, Then
    expect(swapper.swap("mock text")).toEqual(expectedTitleCaseString);
  });
});
