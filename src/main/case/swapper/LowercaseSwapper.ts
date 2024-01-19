import CaseSwapper from "./CaseSwapper";

class LowercaseSwapper implements CaseSwapper {
  public swap(text: string): string {
    return text.toLowerCase();
  }
}

export default LowercaseSwapper;
