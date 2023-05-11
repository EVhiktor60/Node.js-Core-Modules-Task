/* 
NAME: Url Module
DESCRIPTION: This module provides utilities for working with URLs in Node.js. It is commonly used for parsing and formatting URLs.
*/

const url = require('url');
const parsed = url.parse('https://www.example.com/foo/bar?baz=qux#anchor');
console.log(parsed);
