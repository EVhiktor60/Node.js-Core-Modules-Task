/* 
NAME: Querystring Module
DESCRIPTION: This module provides utilities for working with query strings in Node.js. It is commonly used for parsing and serializing URL query strings.
*/

const querystring = require('querystring');
const obj = { foo: 'bar', baz: 'qux' };
const stringified = querystring.stringify(obj);
console.log(stringified);
