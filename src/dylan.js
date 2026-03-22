/*
Language: Dylan
Description: Dylan language definition for highlight.js
Author: Peter Hull <peterhull90@gmail.com>
Category: functional
Website: https://opendylan.org
*/


/*
 * highlight.js Dylan syntax highlighting definition
 *
 * @see https://github.com/highlightjs/highlight.js
 * @see https://opendylan.org/
 *
 * :TODO:
 *
 * @package: highlightjs-dylan
 * @author:  Peter Hull <peterhull90@gmail.com>
 * @since:   2019-04-08
 *
 * Description: Dylan language definition
 * Category: functional
 */

module.exports = function(hljs) {
  const DYLAN_CORE_WORDS = ["define", "end", "handler", "let", "local", "macro", "otherwise"];
  const DYLAN_BEGIN_WORDS = ["begin", "block", "case", "for", "if", "method",
    "select", "unless", "until", "while"
  ];
  const DYLAN_FUNCTION_WORDS = [];
  const DYLAN_DEFINE_BODY_WORDS = ["class", "function", "library", "method", "module"];
  const DYLAN_DEFINE_LIST_WORDS = ["constant", "variable", "domain"];
  const DYLAN_RESERVED_WORDS = [].concat(
    DYLAN_CORE_WORDS,
    DYLAN_BEGIN_WORDS,
    DYLAN_FUNCTION_WORDS,
    DYLAN_DEFINE_BODY_WORDS.map(function(word) {
      return word + '|2';
    }),
    DYLAN_DEFINE_LIST_WORDS
  );
  const DYLAN_HASH_WORDS = ["#t", "#f", "#next", "#rest", "#key", "#all-keys", "#include"];
  const DYLAN_WORD = '[a-z\-+\*/^=#!%$_><@\?~][a-z0-9\-+\*/^=#!%$_><@\?~]*';
  const KEYWORDS = {
    $pattern: DYLAN_WORD,
    literal: DYLAN_HASH_WORDS,
    keyword: DYLAN_RESERVED_WORDS
  };
  const DYLAN_CODE = {
    case_insensitive: true,
    scope: 'dylan',
    keywords: KEYWORDS,
    contains: [
      {
        scope: 'class',
        begin: '<' + DYLAN_WORD + '>',
        relevance: 0
      },
      {
        scope: 'symbol',
        begin: '#"' + DYLAN_WORD + '"'
      },
      {
        scope: 'symbol',
        begin: DYLAN_WORD + ':',
        relevance: 0
      },
      {
        scope: 'string',
        begin: '\'\\\\?.',
        end: '\'',
        illegal: '.'
      },
      {
        scope: 'number',
        begin: ('(#[bB][01][01_]*)'
                + '|(#[oO][0-7][0-7_]*)'
                + '|([-+]?[0-9][0-9_]*([.][0-9][0-9_]*([eEsSdD][0-9]+)?)?)'
                + '|(#[xX][a-fA-F0-9][a-fA-F0-9_]*)'),
        relevance: 0
      },
      hljs.QUOTE_STRING_MODE,
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE
    ]
  };

  return DYLAN_CODE;
};
