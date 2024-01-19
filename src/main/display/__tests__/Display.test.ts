import Display from "../Display";

const realLog = console.log;
const mockLog = jest.fn();

beforeEach(() => (console.log = mockLog));
afterEach(() => (console.log = realLog));

describe("Display", () => {
  it("'print' calls `console.log`", async () => {
    // Given
    const text = "TEXT";
    const display = new Display();
    // When
    display.print(text);
    // Then
    expect(mockLog).toBeCalledWith(text);
  });

  it("'isCalledViaPipe' returns false when `process.stdin.isTTY` is true", async () => {
    // Given
    const display = new Display();
    // When, Then
    expect(display.isCalledViaPipe()).toEqual(!process.stdin.isTTY);
  });
});
