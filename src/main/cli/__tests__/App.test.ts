import App from "../App";
import Arguments from "../Arguments";

const swappedValue = "SWAPPED VALUE";
const mockPrint = jest.fn();
jest.mock("../../case/CaseSwapperFactory", () => {
  return jest.fn().mockImplementation(() => ({
    getCaseSwapper: jest.fn().mockImplementation((caseName: string) => ({
      swap: jest.fn().mockReturnValue(swappedValue),
    })),
  }));
});
jest.mock("../../display/Display", () => {
  return jest.fn().mockImplementation(() => ({ print: mockPrint }));
});

describe("App", () => {
  it("'swap' prints swapped text", async () => {
    // Given
    const app = new App();
    // When
    const swapped = app.swap({ case: "camel", text: "TEST" } as Arguments);
    // Then
    expect(swapped).toEqual(swappedValue);
  });
});
