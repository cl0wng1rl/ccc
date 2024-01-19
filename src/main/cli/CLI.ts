import readline from "readline";
import Display from "../display";
import App from "./App";
import ArgumentParser from "./ArgumentParser";

class CLI {
  private parser: ArgumentParser;
  private app: App;
  private display: Display;

  constructor() {
    this.parser = new ArgumentParser();
    this.app = new App();
    this.display = new Display();
  }

  public async run(args: string[]) {
    if (this.display.isCalledViaPipe()) {
      const text = await this.getPipedInput();
      args.push(text);
    }
    const parsedArgs = this.parser.parse(args.slice(2));
    const swappedText = this.app.swap(parsedArgs);
    this.display.print(swappedText);
  }

  private async getPipedInput(): Promise<string> {
    return new Promise((resolve, reject) => {
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false,
      });

      const lines: string[] = [];
      rl.on("line", (line) => {
        lines.push(line);
      });

      rl.once("close", () => {
        resolve(lines.join("\n"));
      });
    });
  }
}

export default CLI;
