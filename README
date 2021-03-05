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
