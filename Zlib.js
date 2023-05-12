/* 
NAME: Zlib Module
DESCRIPTION: This module provides compression and decompression functionality using the zlib library. Here's an example of compressing data using gzip compression:
*/

const zlib = require('zlib');

const input = 'hello, world!';
zlib.gzip(input, (err, compressed) => {
  if (err) throw err;
  console.log(compressed.toString('base64'));
});
