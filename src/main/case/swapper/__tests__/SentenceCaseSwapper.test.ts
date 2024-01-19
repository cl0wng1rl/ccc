import SentenceCaseSwapper from "../SentenceCaseSwapper";

const mockSeparateWords = ["sentence", "case", "word"];
const expectedSentenceCaseString = "Sentence case word";
const mockSeparate = jest.fn().mockImplementation(() => mockSeparateWords);
jest.mock("../WordSeparator", () => {
  return jest.fn().mockImplementation(() => ({
    separate: mockSeparate,
  }));
});

describe("SentenceCaseSwapper", () => {
  it("returns sentence case string", () => {
    // Given
    const swapper = new SentenceCaseSwapper();
    // When, Then
    expect(swapper.swap("mock text")).toEqual(expectedSentenceCaseString);
  });
});
