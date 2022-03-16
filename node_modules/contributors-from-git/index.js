'use strict'

const path = require('path')
const exec = require('child_process').exec

function contributors (dir, opts, callback) {
  if (typeof opts === 'function') {
    callback = opts
    opts = null
  }

  const cwd = path.resolve(dir)
  const log = (opts && opts.log) || gitlog

  log({ cwd, maxBuffer: 32 * 1024 * 1024 }, function (err, stdout) {
    if (/called without repository|outside repository/i.test(err)) {
      return callback(new Error('Not a git repository: ' + cwd))
    } else if (/bad revision/i.test(err)) {
      return callback(new Error('Current branch does not have any commits yet'))
    } else if (err) {
      return callback(err)
    }

    callback(null, parse(stdout))
  })
}

function gitlog (opts, callback) {
  exec('git shortlog -se HEAD -- .', opts, callback)
}

function parse (stdout) {
  return stdout.split('\n').filter(Boolean).map(function (line) {
    line = line.trim()

    const ia = line.indexOf('\t')
    const ib = line.lastIndexOf('<')
    const name = line.slice(ia + 1, ib - 1)
    const email = line.slice(ib + 1, -1)
    const commits = parseInt(line.slice(0, ia), 10)

    return { name, email, commits }
  })
}

module.exports = contributors
