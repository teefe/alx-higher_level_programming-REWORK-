#!/usr/bin/node
const args = process.argv.slice(2);
if (args.length === 0 || args.length === 1){
    console.log(0);
}else{
    console.log(secondBiggest(args))
}
function secondBiggest(a){
    let secondBig = -Infinity;
    let Big = -Infinity;
    
    for (let i = 0; i < a.length; i++){
        if (parseInt(a[i]) > Big){
            secondBig = Big;
            Big = parseInt(a[i]);
        }
        else if (parseInt(a[i]) > secondBig && parseInt(a[i]) < Big){
                secondBig = a[i];
        }
    }
    return secondBig;
}