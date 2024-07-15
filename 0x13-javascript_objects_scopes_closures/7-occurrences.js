exports.nbOccurences = function (list, searchElement){
    let count = 0;
    list.forEach(function(element, index) {
        if (searchElement == element){
            count++;
        }
    });
    return count;
}