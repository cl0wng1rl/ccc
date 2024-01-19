import CaseSwapper from "./CaseSwapper";
import WordSeparator from "./WordSeparator";

class SnakeCaseSwapper implements CaseSwapper {
  public swap(text: string): string {
    const separator = new WordSeparator();
    const words = separator.separate(text);
    return words.join("_");
  }
}

export default SnakeCaseSwapper;
