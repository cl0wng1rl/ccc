import CaseSwapper from "./CaseSwapper";
import WordSeparator from "./WordSeparator";

class PascalCaseSwapper implements CaseSwapper {
  public swap(text: string): string {
    const separator = new WordSeparator();
    const words = separator.separate(text);
    return PascalCaseSwapper.formatWords(words);
  }

  private static formatWords(words: string[]) {
    return words.map(PascalCaseSwapper.capitaliseWord).join("");
  }

  private static capitaliseWord(word: string) {
    return `${word[0].toUpperCase()}${word.substring(1).toLowerCase()}`;
  }
}

export default PascalCaseSwapper;
