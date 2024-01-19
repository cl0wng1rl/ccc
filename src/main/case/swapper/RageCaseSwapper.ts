import CaseSwapper from "./CaseSwapper";

class RageCaseSwapper implements CaseSwapper {
  public swap(text: string): string {
    return text
      .split("")
      .map((character: string, index: number) =>
        index % 2 ? character.toUpperCase() : character.toLowerCase()
      )
      .join("");
  }
}

export default RageCaseSwapper;
