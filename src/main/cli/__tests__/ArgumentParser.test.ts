import ArgumentParser from "../ArgumentParser";

const mockCase = "mock case";
const mockText = "mock text";

const yargsCommandMock = { positional: jest.fn().mockImplementation(() => yargsMock) };
const yargsMock = {};
Object.assign(yargsMock, {
  alias: jest.fn().mockImplementation(() => yargsMock),
  choices: jest.fn().mockImplementation(() => yargsMock),
  describe: jest.fn().mockImplementation(() => yargsMock),
  demandOption: jest.fn().mockImplementation(() => yargsMock),
  help: jest.fn().mockImplementation(() => yargsMock),
  parseSync: jest.fn().mockImplementation(() => ({ case: mockCase, text: mockText })),
  command: jest.fn().mockImplementation((_, __, fn) => {
    fn(yargsCommandMock);
    return yargsMock;
  }),
});

jest.mock("yargs/yargs", () => jest.fn().mockImplementation(() => yargsMock));

describe("Argument Parser", () => {
  it("'case' returns correct value", () => {
    // Given, When
    const parser = new ArgumentParser();
    const result = parser.parse([]);
    // Then
    expect(result.case).toEqual("mock case");
    expect(result.text).toEqual("mock text");
  });
});
