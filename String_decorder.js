/* 
NAME: String Decoder Module
DESCRIPTION: The string_decoder module provides a way to decode Buffer objects into strings. It is useful when working with multi-byte character sets, or when decoding binary data that includes text.
*/

const { StringDecoder } = require('string_decoder');
const decoder = new StringDecoder('utf8');
const buffer = Buffer.from('Hello, world!', 'utf8');
console.log(decoder.write(buffer));
