class WordSeparator {
  public separate(text: string): string[] {
    return text
      .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
      .split(/[ \-_/\.]/)
      .map((w) => w.toLowerCase());
  }
}

export default WordSeparator;
