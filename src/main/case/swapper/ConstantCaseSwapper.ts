import CaseSwapper from "./CaseSwapper";
import WordSeparator from "./WordSeparator";

class ConstantCaseSwapper implements CaseSwapper {
  public swap(text: string): string {
    const separator = new WordSeparator();
    const words = separator.separate(text);
    return words.map((w) => w.toUpperCase()).join("_");
  }
}

export default ConstantCaseSwapper;
