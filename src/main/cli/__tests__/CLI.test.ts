import CLI from "../CLI";

const mockParse = jest.fn();
jest.mock("../ArgumentParser", () => {
  return jest.fn().mockImplementation(() => ({
    parse: mockParse,
  }));
});
const mockLine = "TEST LINE";
jest.mock("readline", () => {
  return {
    createInterface: jest.fn().mockImplementation(() => ({
      on: jest.fn().mockImplementation((event, fn) => fn(mockLine)),
      once: jest.fn().mockImplementation((event, fn) => fn()),
    })),
  };
});

const mockSwappedValue = "swapped";
jest.mock("../App", () => {
  return jest.fn().mockImplementation(() => ({
    swap: jest.fn().mockImplementation((args) => mockSwappedValue),
  }));
});
const mockPrint = jest.fn();
const mockIsPiped = jest.fn().mockImplementation(() => false);
jest.mock("../../display/Display", () => {
  return jest.fn().mockImplementation(() => ({
    print: mockPrint,
    isCalledViaPipe: mockIsPiped,
  }));
});

const args = ["Argument 1", "Argument 2"];

describe("CLI", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it("'run' calls parse method on program", async () => {
    // Given
    const cli = new CLI();
    // When
    cli.run(args).then(() => {
      // Then
      expect(mockPrint).toBeCalledWith(mockSwappedValue);
    });
  });

  it("'run' gets piped data when called via pipe", async () => {
    mockIsPiped.mockImplementation(() => true);
    // Given
    const cli = new CLI();
    // When
    cli.run(args).then(() => {
      // Then
      expect(mockParse).toBeCalled();
      expect(mockParse.mock.calls[0][0][0]).toEqual(mockLine);
    });
  });
});
