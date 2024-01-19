export const Cases = {
  Upper: "upper",
  Lower: "lower",
  Title: "title",
  Camel: "camel",
  Constant: "constant",
  Dot: "dot",
  Kebab: "kebab",
  Pascal: "pascal",
  Path: "path",
  Sentence: "sentence",
  Snake: "snake",
  Invert: "invert",
  Rage: "rage",
} as const;

export type TextCase = (typeof Cases)[keyof typeof Cases];
