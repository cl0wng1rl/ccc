import Arguments from "./Arguments";
import { CaseSwapperFactory } from "../case";

class App {
  public swap(args: Arguments): string {
    return new CaseSwapperFactory().getCaseSwapper(args.case).swap(args.text);
  }
}

export default App;
