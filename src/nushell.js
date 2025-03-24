/**
 * Language: Nushell
 * Author: Loïc Riegel <loic.riegel@outlook.fr>
 * Contributors: Loïc Riegel <loic.riegel@outlook.fr>
 * Description: a modern shell that uses structured data and a programming language.
 * Website: https://www.nushell.sh/
 */

export default function(hljs) {

  const KNOWN_SHEBANG = hljs.SHEBANG({
    binary: "nu",
    relevance: 10
  });

  const RESERVED_WORDS = [
    'and',
    'else',
    'if',
    'in',
    'not'
  ]

  const BUILT_INS_CORE = [
    'alias',
    'assert',
    'break',
    'commandline',
    'const',
    'continue',
    'def',
    'describe',
    'do',
    'echo',
    'export',
    'extern',
    'help',
    'hide',
    'hide-env',
    'for',
    'get',
    'ignore',
    'is-admin',
    'let',
    'loop',
    'match',
    'module',
    'mut',
    'open',
    'overlay',
    'print',
    'return',
    'scope',
    'set',
    'source',
    'source-env',
    'try',
    'use',
    'while',
    'with-env'
  ]

  const BUILT_INS_FILTERS = [
    'enumerate',
    'where'
  ]

  const LITERALS = [
    'false',
    'null',
    'true'
  ]

  const TYPES = [
    "any",
    "bool",
    "int",
    "float",
    "filesize",
    "duration",
    "datetime",
    "range",
    "string",
    "record",
    "list",
    "table",
    "closure",
    "nothing",
    "binary",
    "glob",
    "cell-path"
  ]

  const KEYWORDS = {
    $pattern: /[A-Za-z]\w+/,
    keyword: RESERVED_WORDS,
    built_in: BUILT_INS_CORE,
    literal: LITERALS,
    type: TYPES
  };

  const NUMBER = {
    className: 'number',
    relevance: 0,
    variants: [
      { begin: "-?\\b\\d+\\.?\\d*([eE]-?\\d+)?\\b" },  // Decimal & Scientific Notation
      { begin: "-?\\b0x[0-9a-fA-F]+\\b" },             // Hexadecimal
      { begin: "-?\\b0b[01]+\\b" },                    // Binary
      { begin: "-?(inf|infinity)\\b", relevance: 3 }   // Infinity values
    ]
  };


  return {
    name: 'Nushell',
    aliases: [
      'nu',
    ],
    unicodeRegex: true,
    case_insensitive: true,
    keywords: KEYWORDS,
    contains: [
      NUMBER,
    ]
  };
}
