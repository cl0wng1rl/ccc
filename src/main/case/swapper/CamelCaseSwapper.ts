import CaseSwapper from "./CaseSwapper";
import WordSeparator from "./WordSeparator";

class CamelCaseSwapper implements CaseSwapper {
  public swap(text: string): string {
    const separator = new WordSeparator();
    const words = separator.separate(text);
    return CamelCaseSwapper.formatWords(words);
  }

  private static formatWords(words: string[]) {
    const firstWord = words[0];
    const otherWords = words.slice(1).map(CamelCaseSwapper.capitaliseWord);
    return `${firstWord}${otherWords.join("")}`;
  }

  private static capitaliseWord(word: string) {
    return `${word[0].toUpperCase()}${word.substring(1).toLowerCase()}`;
  }
}

export default CamelCaseSwapper;
