import CaseSwapper from "./CaseSwapper";

class UppercaseSwapper implements CaseSwapper {
  public swap(text: string): string {
    return text.toUpperCase();
  }
}

export default UppercaseSwapper;
