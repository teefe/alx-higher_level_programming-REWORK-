#!/usr/bin/node
const args = process.argv.slice(2);
if (isNaN(args[0]))
{
    console.log("Not a number");
}else
{
    myNum = parseInt(args[0]);
    console.log(" My number: " + myNum);
}