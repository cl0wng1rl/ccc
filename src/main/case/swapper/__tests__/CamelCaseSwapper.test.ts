import CamelCaseSwapper from "../CamelCaseSwapper";

const mockSeparateWords = ["camel", "case", "word"];
const expectedCamelCaseString = "camelCaseWord";
const mockSeparate = jest.fn().mockImplementation(() => mockSeparateWords);
jest.mock("../WordSeparator", () => {
  return jest.fn().mockImplementation(() => ({
    separate: mockSeparate,
  }));
});

describe("CamelCaseSwapper", () => {
  it("returns camel case string", () => {
    // Given
    const swapper = new CamelCaseSwapper();
    // When, Then
    expect(swapper.swap("mock text")).toEqual(expectedCamelCaseString);
  });
});
