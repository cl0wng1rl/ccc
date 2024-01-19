import WordSeparator from "../WordSeparator";

const capitaliseWord = (word: string) => `${word[0].toUpperCase()}${word.substring(1)}`;

describe("WordSeparator", () => {
  it("with a kebab case string returns separate words", () => {
    // Given
    const speparateWords = ["kebab", "case", "string"];
    const kebabCaseWord = speparateWords.join("-");
    const separator = new WordSeparator();
    // When, Then
    expect(separator.separate(kebabCaseWord)).toEqual(speparateWords);
  });

  it("with a snake case string 'separate' returns separate words", () => {
    // Given
    const speparateWords = ["snake", "case", "string"];
    const snakeCaseWord = speparateWords.join("_");
    const separator = new WordSeparator();
    // When, Then
    expect(separator.separate(snakeCaseWord)).toEqual(speparateWords);
  });

  it("with a camel case string 'separate' returns separate words", () => {
    // Given
    const speparateWords = ["camel", "case", "string"];
    const camelCaseWord = `${speparateWords[0]}${speparateWords
      .slice(1)
      .map(capitaliseWord)
      .join("")}`;
    const separator = new WordSeparator();
    // When, Then
    expect(separator.separate(camelCaseWord)).toEqual(speparateWords);
  });

  it("with a pascal case string 'separate' returns separate words", () => {
    // Given
    const speparateWords = ["pascal", "case", "string"];
    const pascalCaseWord = speparateWords.map(capitaliseWord).join("");
    const separator = new WordSeparator();
    // When, Then
    expect(separator.separate(pascalCaseWord)).toEqual(speparateWords);
  });

  it("with a constant case string 'separate' returns separate words", () => {
    // Given
    const speparateWords = ["constant", "case", "string"];
    const constantCaseWord = speparateWords.map((w) => w.toUpperCase()).join("_");
    const separator = new WordSeparator();
    // When, Then
    expect(separator.separate(constantCaseWord)).toEqual(speparateWords);
  });

  it("with a train case string 'separate' returns separate words", () => {
    // Given
    const speparateWords = ["train", "case", "string"];
    const trainCaseWord = speparateWords.map(capitaliseWord).join("-");
    const separator = new WordSeparator();
    // When, Then
    expect(separator.separate(trainCaseWord)).toEqual(speparateWords);
  });

  it("with a dot case string 'separate' returns separate words", () => {
    // Given
    const speparateWords = ["dot", "case", "string"];
    const dotCaseWord = speparateWords.join(".");
    const separator = new WordSeparator();
    // When, Then
    expect(separator.separate(dotCaseWord)).toEqual(speparateWords);
  });

  it("with a path case string 'separate' returns separate words", () => {
    // Given
    const speparateWords = ["path", "case", "string"];
    const pathCaseWord = speparateWords.join("/");
    const separator = new WordSeparator();
    // When, Then
    expect(separator.separate(pathCaseWord)).toEqual(speparateWords);
  });
});
