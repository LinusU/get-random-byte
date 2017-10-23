'use strict'

const crypto = require('crypto')

const CACHE_SIZE = 4096

let pos = 0
let cache

module.exports = function () {
  if (pos === 0) cache = crypto.randomBytes(CACHE_SIZE)
  return cache[(pos = (pos + 1) % CACHE_SIZE)]
}
