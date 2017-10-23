# Get random byte

Get a single, cryptographically strong, random byte.

This module uses an internal cache to minimize calls against the crypto backend. When the cache is empty, a large number of bytes is requested and handed out one by one. The perfomance benefits of this can be seen [in this jsPerf test case](https://jsperf.com/get-random-byte/1).

## Installation

```sh
npm install --save get-random-byte
```

## Usage

```js
const getRandomByte = require('get-random-byte')

console.log(getRandomByte())
//=> 112

console.log(getRandomByte())
//=> 143

console.log(getRandomByte())
//=> 205
```

## API

### `getRandomByte(): number`

Return a cryptographically strong random integer between 0 and 255 (inclusivly).
