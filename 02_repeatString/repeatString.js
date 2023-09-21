const repeatString = function(word, counter) {
    if(counter<0){
        return "ERROR";
    }
    let string = "";
    for(let i=0; i<counter; i++){
        string+=word;
    }
    return string;
};

// Do not edit below this line
module.exports = repeatString;
