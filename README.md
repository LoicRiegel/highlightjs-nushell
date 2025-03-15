![logo](logo.svg)

# Nushell - a language grammar for [highlight.js](https://highlightjs.org/)

<!-- ![version](https://badgen.net/npm/v/highlightjs-nushell) -->
<!-- ![install size](https://badgen.net/packagephobia/install/highlightjs-nushell) ![minified size](https://badgen.net/bundlephobia/min/highlightjs-nushell) -->

![license](https://badgen.net/badge/license/CC0%201.0/blue)
[![Build Status](https://travis-ci.com/highlightjs/highlightjs-nushell.svg?branch=master)](https://travis-ci.com/LoicRiegel/highlightjs-nushell)

[Nushell](https://www.nushell.sh/) is a modern shell that uses structured data , making it easy to filter, transform, and manipulate it. It works on any OS, has a powerful plugin system and plenty other features that one expects from a modern shell.

## Usage

Simply include the Highlight.js library in your webpage or Node app, then load this module.

### Static website or simple usage

Simply load the module after loading Highlight.js. You'll use the minified version found in the `dist` directory. This module is just a CDN build of the language, so it will register itself as the Javascript is loaded.

```html
<script type="text/javascript" src="/path/to/highlight.min.js"></script>
<script type="text/javascript" charset="UTF-8"
  src="/path/to/highlightjs-nushell/dist/nushell.min.js"></script>
<script type="text/javascript">
  hljs.highlightAll();
</script>
```

### Using directly from the UNPKG CDN

```html
<script type="text/javascript"
  src="https://unpkg.com/highlightjs-nushell/dist/nushell.min.js"></script>
```

- More info: <https://unpkg.com>

### With Node or another build system

If you're using Node / Webpack / Rollup / Browserify, etc, simply require the language module, then register it with Highlight.js.

```javascript
var hljs = require('highlightjs');
var hljsNushell = require('highlightjs-nushell');

hljs.registerLanguage("nushell", hljsNushell);
hljs.highlightAll();
```

### React

You need to import both Highlight.js and third-party language like nushell:

```js
import React, {Component} from 'react'
import 'highlight.js/scss/darcula.scss' # your favourite theme
import nushell from './nushell'
import hljs from 'highlight.js'
hljs.registerLanguage('nushell', nushell);

class Highlighter extends Component
{
  constructor(props)
  {
    super(props);
    hljs.highlightAll();
  }

  render()
  {
    let {children} = this.props;
    return
    {
      <pre ref={(node) => this.node = node}>
        <code className="nushell">
          {children}
        </code>
      </pre>
    }
  }
}

export default Highlighter;
```

## License

Highlight.js is released under the CC0 1.0 License. See [LICENSE][1] file
for details.

### Author

Loïc Riegel <loic.riegel@outlook.fr>

### Maintainer

Loïc Riegel <loic.riegel@outlook.fr>

## Links

- The official site for the Highlight.js library is <https://highlightjs.org/>.
- The Highlight.js GitHub project: <https://github.com/highlightjs/highlight.js>
- Learn more about Nushell: <https://www.nushell.sh/>

[1]: https://github.com/LoicRiegel/highlightjs-nushell/blob/master/LICENSE
