exports.esrever = function (list){
    ourlist = [];
    list.forEach(function(item,index){
        ourlist.unshift(item);
    });
    return ourlist;
}