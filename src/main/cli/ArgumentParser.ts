import Arguments from "./Arguments";
import yargs from "yargs/yargs";
import CONSTANTS from "./constants";

class ArgumentParser {
  public parse(args: string[]): Arguments {
    const parsedArgs = yargs(args)
      .command(CONSTANTS.command, CONSTANTS.description, (yargs) => {
        yargs.positional(CONSTANTS.textFlag, {
          description: CONSTANTS.textDescription,
          demandOption: true,
          type: "string",
        });
      })
      .alias(CONSTANTS.caseAbbreviated, CONSTANTS.caseFlag)
      .choices(CONSTANTS.caseAbbreviated, CONSTANTS.caseOptions)
      .describe(CONSTANTS.caseAbbreviated, CONSTANTS.caseDescription)
      .demandOption([CONSTANTS.caseAbbreviated])
      .help(CONSTANTS.helpAbbreviated)
      .alias(CONSTANTS.helpAbbreviated, CONSTANTS.helpFlag)
      .parseSync();
    return new Arguments(parsedArgs.case, parsedArgs.text);
  }
}

export default ArgumentParser;
