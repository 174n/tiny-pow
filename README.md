<p align="center">

```⚙️ tiny-pow - Tiny proof of work for a modern browser```

[![last commit](https://img.shields.io/github/last-commit/Rundik/tiny-pow.svg)](https://github.com/Rundik/tiny-pow/commits/master)
[![version](https://img.shields.io/npm/v/tiny-pow.svg)](https://www.npmjs.com/package/tiny-pow)
[![downloads](https://img.shields.io/npm/dm/tiny-pow.svg)](https://www.npmjs.com/package/tiny-pow)
[![license](https://img.shields.io/npm/l/tiny-pow.svg)](https://github.com/Rundik/tiny-pow/blob/master/license)
[![bundle size](https://img.shields.io/bundlephobia/min/Rundik/tiny-pow)](https://github.com/Rundik/tiny-pow/blob/master/tiny-pow.min.js)
</p>

Tiny proof of work library for browser. It does use [SubtleCrypto](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto) and [async/await](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await) so it requires a secure context and a modern browser.

```js
await tinyPow("my data", 4) // will return the salt that has 4 zeros at the beginning of sha256("my data" + salt)
```
