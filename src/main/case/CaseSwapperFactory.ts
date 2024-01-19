import { TextCase } from "./TextCase";
import * as swapper from "./swapper";

class CaseSwapperFactory {
  private static CASE_SWAPPERS_BY_TEXT_CASE = {
    upper: new swapper.UppercaseSwapper(),
    lower: new swapper.LowercaseSwapper(),
    title: new swapper.TitleCaseSwapper(),
    camel: new swapper.CamelCaseSwapper(),
    constant: new swapper.ConstantCaseSwapper(),
    dot: new swapper.DotCaseSwapper(),
    kebab: new swapper.KebabCaseSwapper(),
    pascal: new swapper.PascalCaseSwapper(),
    path: new swapper.PathCaseSwapper(),
    sentence: new swapper.SentenceCaseSwapper(),
    snake: new swapper.SnakeCaseSwapper(),
    invert: new swapper.InvertCaseSwapper(),
    rage: new swapper.RageCaseSwapper(),
  };

  public getCaseSwapper(textCase: TextCase): swapper.CaseSwapper {
    return CaseSwapperFactory.CASE_SWAPPERS_BY_TEXT_CASE[textCase];
  }
}

export default CaseSwapperFactory;
