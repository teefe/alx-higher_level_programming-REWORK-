#!/usr/bin/node
const args = process.argv.slice(2);
if(isNaN(args[0])){
    console.log("Missing size");
}else{
    for (let i = 0; i < args[0]; i++){
        let raw = "";
        for (let j = 0; j < args[0]; j++){
            raw = raw + "x";
        }
        console.log(raw);
    }
}

