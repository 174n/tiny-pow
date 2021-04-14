### ```⚙️ tiny-pow - Tiny proof of work for modern browsers```

[![last commit](https://img.shields.io/github/last-commit/Rundik/tiny-pow.svg)](https://github.com/Rundik/tiny-pow/commits/master)
[![bundle size](https://img.shields.io/github/size/Rundik/tiny-pow/tiny-pow.min.js)](https://github.com/Rundik/tiny-pow/blob/master/tiny-pow.min.js)
[![version](https://img.shields.io/npm/v/tiny-pow.svg)](https://www.npmjs.com/package/tiny-pow)
[![downloads](https://img.shields.io/npm/dm/tiny-pow.svg)](https://www.npmjs.com/package/tiny-pow)
[![license](https://img.shields.io/github/license/Rundik/tiny-pow)](https://github.com/Rundik/tiny-pow/blob/master/LICENSE)


Tiny proof of work library for browser. It does use [SubtleCrypto](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto) and [async/await](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await) so it requires a secure context and a modern browser.

```html
<script type="module">
  import tinyPow from "https://unpkg.com/tiny-pow";
  // use it as a module or just copy/paste the code

  await tinyPow("my data", 4)
  // will return the salt that has 4 zeros at the beginning of sha256("my data" + salt)
</script>
```
