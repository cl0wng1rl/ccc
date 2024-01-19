type TestCase = {
  name: string;
  plain: string;
  results: { case: string; value: string }[];
};

const basicSentence: TestCase = {
  name: "Basic Sentence",
  plain: "the birch canoe slid on the smooth planks",
  results: [
    { case: "upper", value: "THE BIRCH CANOE SLID ON THE SMOOTH PLANKS" },
    { case: "lower", value: "the birch canoe slid on the smooth planks" },
    { case: "title", value: "The Birch Canoe Slid On The Smooth Planks" },
    { case: "camel", value: "theBirchCanoeSlidOnTheSmoothPlanks" },
    { case: "constant", value: "THE_BIRCH_CANOE_SLID_ON_THE_SMOOTH_PLANKS" },
    { case: "dot", value: "the.birch.canoe.slid.on.the.smooth.planks" },
    { case: "kebab", value: "the-birch-canoe-slid-on-the-smooth-planks" },
    { case: "pascal", value: "TheBirchCanoeSlidOnTheSmoothPlanks" },
    { case: "path", value: "the/birch/canoe/slid/on/the/smooth/planks" },
    { case: "sentence", value: "The birch canoe slid on the smooth planks" },
    { case: "snake", value: "the_birch_canoe_slid_on_the_smooth_planks" },
    { case: "invert", value: "THE BIRCH CANOE SLID ON THE SMOOTH PLANKS" },
    { case: "rage", value: "tHe bIrCh cAnOe sLiD On tHe sMoOtH PlAnKs" },
  ],
};

const camelCaseString: TestCase = {
  name: "Camel Case String",
  plain: "camelCaseString",
  results: [
    { case: "upper", value: "CAMELCASESTRING" },
    { case: "lower", value: "camelcasestring" },
    { case: "title", value: "Camel Case String" },
    { case: "camel", value: "camelCaseString" },
    { case: "constant", value: "CAMEL_CASE_STRING" },
    { case: "dot", value: "camel.case.string" },
    { case: "kebab", value: "camel-case-string" },
    { case: "pascal", value: "CamelCaseString" },
    { case: "path", value: "camel/case/string" },
    { case: "sentence", value: "Camel case string" },
    { case: "snake", value: "camel_case_string" },
    { case: "invert", value: "CAMELcASEsTRING" },
    { case: "rage", value: "cAmElCaSeStRiNg" },
  ],
};

const constantCaseString: TestCase = {
  name: "Constant Case String",
  plain: "CONSTANT_CASE_STRING",
  results: [
    { case: "upper", value: "CONSTANT_CASE_STRING" },
    { case: "lower", value: "constant_case_string" },
    { case: "title", value: "Constant Case String" },
    { case: "camel", value: "constantCaseString" },
    { case: "constant", value: "CONSTANT_CASE_STRING" },
    { case: "dot", value: "constant.case.string" },
    { case: "kebab", value: "constant-case-string" },
    { case: "pascal", value: "ConstantCaseString" },
    { case: "path", value: "constant/case/string" },
    { case: "sentence", value: "Constant case string" },
    { case: "snake", value: "constant_case_string" },
    { case: "invert", value: "constant_case_string" },
    { case: "rage", value: "cOnStAnT_CaSe_sTrInG" },
  ],
};

const CASES = [basicSentence, camelCaseString, constantCaseString];

export { TestCase };
export default CASES;
