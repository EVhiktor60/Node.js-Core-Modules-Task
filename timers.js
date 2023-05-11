/* 
NAME: Timers Module
DESCRIPTION: The timers module provides functions to schedule and cancel timers. It can be used for scheduling periodic tasks, delaying execution of a function, or running a function after a set amount of time has passed.
*/

function sayHello() {
    console.log('Hello, world!');
  }
  const timerId = setTimeout(sayHello, 2000);


  