/* 
NAME: Path Module
DESCRIPTION: This module provides utilities for working with file paths in Node.js. It is commonly used for resolving file paths, working with file extensions, and manipulating file paths.
*/

const path = require('path');
const resolvedPath = path.resolve('foo/bar', '../baz');
console.log(resolvedPath);
