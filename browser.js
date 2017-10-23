/* global crypto */

'use strict'

const CACHE_SIZE = 4096

let pos = 0
const cache = new Uint8Array(CACHE_SIZE)

module.exports = function () {
  if (pos === 0) crypto.getRandomValues(cache)
  return cache[(pos = (pos + 1) % CACHE_SIZE)]
}
