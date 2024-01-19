import CaseSwapper from "./CaseSwapper";
import WordSeparator from "./WordSeparator";

class KebabCaseSwapper implements CaseSwapper {
  public swap(text: string): string {
    const separator = new WordSeparator();
    const words = separator.separate(text);
    return words.join("-");
  }
}

export default KebabCaseSwapper;
