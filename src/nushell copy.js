/**
 * Language: Nushell
 * Author: Loïc Riegel <loic.riegel@outlook.fr>
 * Contributors: Loïc Riegel <loic.riegel@outlook.fr>
 * Description: a modern shell that uses structured data and a programming language.
 * Website: https://www.nushell.sh/
 */
module.exports = function (hljs)
{
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

  return {
    name: 'Nushell',
    aliases: ['nu'],
    case_insensitive: false,
    keywords:
      {
        $pattern: /[A-Za-z]\w+/,
        keyword: RESERVED_WORDS,
        literal: LITERALS,
        built_in: [
          ...BUILT_INS_CORE,
          ...BUILT_INS_FILTERS
        ],
        type: TYPES
      },
    contains:
      [
        KNOWN_SHEBANG,
      ]
  }
}
