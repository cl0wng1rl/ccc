import SnakeCaseSwapper from "../SnakeCaseSwapper";

const mockSeparateWords = ["snake", "case", "word"];
const expectedSnakeCaseString = "snake_case_word";
const mockSeparate = jest.fn().mockImplementation(() => mockSeparateWords);
jest.mock("../WordSeparator", () => {
  return jest.fn().mockImplementation(() => ({
    separate: mockSeparate,
  }));
});

describe("SnakeCaseSwapper", () => {
  it("returns snake case string", () => {
    // Given
    const swapper = new SnakeCaseSwapper();
    // When, Then
    expect(swapper.swap("mock text")).toEqual(expectedSnakeCaseString);
  });
});
