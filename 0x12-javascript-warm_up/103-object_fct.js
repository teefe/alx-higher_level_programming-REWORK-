#!/usr/bin/node
const myObject = {
    type: 'object',
    value: 12
  };
  console.log(myObject);
  /*
  YOUR CODE HERE
  */
 myObject.incr = () => {
    this.value = ++myObject.value;
 }
  myObject.incr();
  console.log(myObject);
  myObject.incr();
  console.log(myObject);
  myObject.incr();
  console.log(myObject);
  