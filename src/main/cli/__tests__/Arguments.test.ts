import { Cases } from "../../case";
import Arguments from "../Arguments";

const obj = { case: Cases.Camel, text: "mock text" };

describe("Arguments", () => {
  it("'case' returns correct value", () => {
    // Given, When
    const args = new Arguments(obj.case, obj.text);
    // Then
    expect(obj.case).toEqual(args.case);
  });

  it("'text' returns correct value", () => {
    // Given, When
    const args = new Arguments(obj.case, obj.text);
    // Then
    expect(obj.text).toEqual(args.text);
  });
});
