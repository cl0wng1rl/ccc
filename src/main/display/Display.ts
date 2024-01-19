class Display {
  public print(message: string): void {
    console.log(message);
  }

  public isCalledViaPipe(): boolean {
    return !process.stdin.isTTY;
  }
}

export default Display;
