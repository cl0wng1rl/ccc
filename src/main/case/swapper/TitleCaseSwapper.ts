import CaseSwapper from "./CaseSwapper";
import WordSeparator from "./WordSeparator";

class TitleCaseSwapper implements CaseSwapper {
  public swap(text: string): string {
    const separator = new WordSeparator();
    const words = separator.separate(text);
    return words
      .map((word) => `${word[0].toUpperCase()}${word.substring(1).toLowerCase()}`)
      .join(" ");
  }
}

export default TitleCaseSwapper;
