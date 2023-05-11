/* 
NAME: Assert Module
DESCRIPTION: This module provides functions for asserting whether conditions are true. It is commonly used for testing and debugging.
*/

const assert = require('assert');
function add(a, b) {
  return a + b;
}
assert.strictEqual(add(2, 3), 5)



