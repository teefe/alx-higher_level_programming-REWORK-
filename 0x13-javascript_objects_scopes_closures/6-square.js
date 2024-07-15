#!/usr/bin/node
const Square5 = require('./5-square');

class Square extends Square5 {
    constructor (size){
        super(size,size)
    }

    charPrint(C){
        for (let i = 0; i < this.size; i++){
            let row = "";
            for (let j = 0; j < this.size; j++){
                row += C;
            }
            console.log(row);
        }
    }
    
}

module.exports = Square;