import { Cases } from "../case";

const textFlag = "text";
const textDescription = "the text to swap the case of";

const caseAbbreviated = "c";
const caseFlag = "case";
const caseDescription = "case to swap to";
const caseOptions = Object.values(Cases);

const helpAbbreviated = "h";
const helpFlag = "help";

const command = `$0 <${textFlag}> [..options]`;
const description = `Swap the case of ${textFlag}`;

const CONSTANTS = {
  textFlag,
  textDescription,
  caseAbbreviated,
  caseFlag,
  caseDescription,
  caseOptions,
  helpAbbreviated,
  helpFlag,
  command,
  description,
};

export default CONSTANTS;
