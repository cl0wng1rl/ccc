import CaseSwapper from "./CaseSwapper";

class InvertCaseSwapper implements CaseSwapper {
  public swap(text: string): string {
    return text.split("").map(InvertCaseSwapper.swapCase).join("");
  }

  private static swapCase(letter: string): string {
    return letter.toLowerCase() == letter ? letter.toUpperCase() : letter.toLowerCase();
  }
}

export default InvertCaseSwapper;
