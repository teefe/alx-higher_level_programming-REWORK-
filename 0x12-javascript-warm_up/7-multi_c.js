#!/usr/bin/node
const x = process.argv.slice(2);
if (isNaN(x[0])){
    console.log("missing number of occurrances");
}else {
    const counter = parseInt(x[0]);
    for (let a = 0; a < counter; a++){
        console.log("C is fun")
    }
}