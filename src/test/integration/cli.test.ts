import { main } from "../..";
import CASES, { TestCase } from "./constants";

let loggedLines: string[] = [];

describe("Running command", () => {
  const realLog = console.log;
  const isTTY = process.stdin.isTTY;

  beforeEach(() => {
    loggedLines = [];
    console.log = (line) => loggedLines.push(line);
    process.stdin.isTTY = true;
  });

  afterEach(() => {
    console.log = realLog;
    process.stdin.isTTY = isTTY;
  });

  CASES.forEach((testCase) => getTestSuiteForCase(testCase));
});

function getTestSuiteForCase(testCase: TestCase) {
  describe(testCase.name, () => {
    testCase.results.forEach((result: { case: string; value: string }) => {
      it(`should correctly swap to ${result.case} case`, () => {
        // Given
        process.argv = ["node", "csu", "-c", result.case, testCase.plain];
        // When
        main();
        // Then
        expect(loggedLines[loggedLines.length - 1]).toBe(result.value);
      });
    });
  });
}
