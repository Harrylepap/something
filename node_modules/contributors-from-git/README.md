# contributors-from-git

> **Get an array of contributors from a git working tree.**  
> Requires git 1.7+. Forked from [`git-contributors`](https://github.com/davidlinse/git-contributors.js) to reduce its scope (no output formatters, command-line interface, sorting or filtering).

[![npm](https://img.shields.io/npm/v/contributors-from-git.svg)](https://www.npmjs.com/package/contributors-from-git)
[![Node version](https://img.shields.io/node/v/contributors-from-git.svg)](https://www.npmjs.com/package/contributors-from-git)
[![Build Status](https://travis-ci.org/vweevers/contributors-from-git.svg)](https://travis-ci.org/vweevers/contributors-from-git)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Usage

```
npm install contributors-from-git
```

```js
var contributors = require('contributors-from-git')

contributors('.', function (err, result) {
  if (err) throw err
  console.log(result)
})
```

This yields an array of contributors:

```js
[
  { commits: 40, name: 'Maja',  email: 'maja@hive' },
  { commits: 10, name: 'Flip',  email: 'flip@meadow' },
  { commits: 80, name: 'Willi', email: 'willi@sunflower' }
]
```

## API

### `contributors(dir, callback)`

The `dir` argument must resolve to a git working tree.

## License

[MIT](LICENSE) © 2019 Vincent Weevers, © 2014 David Linse.
