#!/usr/bin/node
function factorial(a){
    if (isNaN(a)) return 1;
    if (a === 0 ) return 1;
    
    return a * factorial(a - 1);
} 
const args = process.argv.slice(2);
console.log(factorial(parseInt(args[0])));