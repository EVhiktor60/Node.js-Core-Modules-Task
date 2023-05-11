/* 
NAME: Stream Module
DESCRIPTION: This module provides a way to handle streaming data in Node.js. It is commonly used for reading and writing large amounts of data, as well as for handling real-time data streams.
*/

const fs = require('fs');
const zlib = require('zlib');
const readStream = fs.createReadStream('input.txt');
const writeStream = fs.createWriteStream('output.txt.gz');
const gzip = zlib.createGzip();
readStream.pipe(gzip).pipe(writeStream);
