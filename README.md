<div align="center">
  <h1>ccc</h1>

  <i>Quick and simple text case conversion in the terminal</i>

  <a href="https://github.com/cl0wng1rl/ccc/actions/workflows/tests.yml">
    <img src="https://github.com/cl0wng1rl/ccc/actions/workflows/tests.yml/badge.svg"/>
  </a>
  <a href="https://codecov.io/github/cl0wng1rl/ccc">
    <img src="https://codecov.io/github/cl0wng1rl/ccc/branch/main/graph/badge.svg?token=RfkXLINOJV"/>
  </a>
  <a href="https://www.npmjs.com/package/case-converter-cli">
    <img src="https://img.shields.io/npm/v/case-converter-cli"/>
  </a>
  <a href="!https://www.npmjs.com/package/case-converter-cli">
    <img src="https://img.shields.io/bundlephobia/min/case-converter-cli"/>
  </a>
  <a href="https://www.typescriptlang.org/">
    <img src="https://img.shields.io/badge/language-typescript-007ACC"/>
  </a>
  <a href="https://github.com/cl0wng1rl/ccc/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/cl0wng1rl/ccc" />
  </a>

</div>


## Case Converter CLI

`ccc` is a command line tool designed to make converting the case of text easy.

### Installation

Install `ccc` globally via npm:

`npm install --global case-converter-cli`

### Usage

The `ccc` command requires text to convert and a case to use, supplied via the `--case` flag.

Text to be converted can be passed to the `ccc` command in two ways:
- Supplied as an argument
- Piped from a previous command

#### Argument

When supplying text via argument, simply choose a _case_, for example "upper", and supply the text as a default argument:

`$ ccc "hello world" --case upper`

`> HELLO WORLD`

#### Piped

When supplying text via argument, choose a _case_, for example "upper", and pipe the output of another command to `ccc`:

`$ echo "hello world" | ccc --case upper`

`> HELLO WORLD`

### Cases

`ccc` offers an extensive list of cases, and attempts to detect the case of the input text before converting it to the chosen case. The list of cases are as follows:

- upper
- lower
- title
- camel
- constant
- dot
- kebab
- pascal
- path
- sentence
- snake
- invert
- rage

### Examples

Below is the result of running `ccc` on the text _'Good morning World'_ with different cases:

| Case     | Input              | Output             |
|----------|--------------------|--------------------|
| upper    | Good morning World | GOOD MORNING WORLD |
| lower    | Good morning World | good morning world |
| title    | Good morning World | Good Morning World |
| camel    | Good morning World | goodMorningWorld   |
| constant | Good morning World | GOOD_MORNING_WORLD |
| dot      | Good morning World | good.morning.world |
| kebab    | Good morning World | good-morning-world |
| pascal   | Good morning World | GoodMorningWorld   |
| path     | Good morning World | good/morning/world |
| sentence | Good morning World | Good morning world |
| snake    | Good morning World | good_morning_world |
| invert   | Good morning World | gOOD MORNING wORLD |
| rage     | Good morning World | gOoD MoRnInG WoRlD |
