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
    this.value = ++this.value;
 }
  myObject.incr();
  console.log(myObject);
  myObject.incr();
  console.log(myObject);
  myObject.incr();
  console.log(myObject);
  