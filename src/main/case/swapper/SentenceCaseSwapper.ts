import CaseSwapper from "./CaseSwapper";
import WordSeparator from "./WordSeparator";

class SentenceCaseSwapper implements CaseSwapper {
  public swap(text: string): string {
    const separator = new WordSeparator();
    const words = separator.separate(text);
    words[0] = `${words[0][0].toUpperCase()}${words[0].substring(1).toLowerCase()}`;
    return words.join(" ");
  }
}

export default SentenceCaseSwapper;
