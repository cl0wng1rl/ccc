import { TextCase } from "../case";

class Arguments {
  constructor(private _case: TextCase, private _text: string) {}

  public get case() {
    return this._case;
  }

  public get text() {
    return this._text;
  }
}

export default Arguments;
