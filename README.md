# Dylan - a language grammar for highlight.js 

This repository contains highlight.js support for the Dylan language.

Dylan is a multi-paradigm functional and object-oriented programming
language. It is dynamic while providing a programming model designed
to support efficient machine code generation, including fine-grained
control over dynamic and static behaviors.

## Usage

Include the Highlight.js library in your webpage or Node app, then load this module.

### Static website or simple usage

Load the module after loading Highlight.js.  You'll use the minified version found in the `dist` directory.  This module is just a CDN build of the language, so it will register itself as the Javascript is loaded.

```html
<script type="text/javascript" src="/path/to/highlight.min.js"></script>
<script type="text/javascript" src="/path/to/highlightjs-dylan/dist/dylan.min.js"></script>
<script type="text/javascript">
  hljs.highlightAll();
</script>
```

### With Node or another build system

If you're using Node / Webpack / Rollup / Browserify, etc, require the language module, then register it with Highlight.js.

```javascript
var hljs = require('highlight.js');
var hljsDylan = require('highlightjs-dylan');

hljs.registerLanguage("dylan", hljsDylan);
```

## Testing

To test this highlighter see [the highlight.js 3rd party quick
start](https://github.com/highlightjs/highlight.js/blob/main/extra/3RD_PARTY_QUICK_START.md).

For the impatient, my (cgay) experience was that I needed to do the following steps:

1. Clone the `highlight.js` repository and run `npm install` in it.
1. `cd extra` and create a symlink to the `highlightjs-dylan` repository.
1. In `highlightjs-dylan` modify the file `test/markup/sample.txt` with the code you want
   to test.
1. In `highlight.js` run `npm run build; npm run test`.
1. Verify that the displayed diff looks correct and, if yes, copy it into
   `test/markup/sample.expect.txt`.
1. Go to step 3.

## License
This code is released under the MIT License. See [LICENSE][1] file
for details.

### Maintainer
P Hull <peterhull90@gmail.com>

## Links

- The official site for the Highlight.js library is <https://highlightjs.org/>.
- The Highlight.js GitHub project: <https://github.com/highlightjs/highlight.js>
- Open Dylan's home is https://opendylan.org/

[1]: https://github.com/highlightjs/highlightjs-dylan/blob/master/LICENSE
