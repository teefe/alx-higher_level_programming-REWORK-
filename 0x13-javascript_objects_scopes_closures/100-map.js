const myList = require('./100-data').list;

function multiple(){
    console.log(myList);
    console.log(myList.map((k) => k * myList.indexOf(k)))
}
multiple();