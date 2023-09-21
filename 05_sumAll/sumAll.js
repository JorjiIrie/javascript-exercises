const sumAll = function(firstVal, secondVal) {
    if (firstVal > secondVal){
       const temp = firstVal;
       firstVal = secondVal;
       secondVal = temp;
    }
    if(firstVal < 0 || secondVal < 0){
        return "ERROR";
    }
    if(!Number.isInteger(firstVal) || !Number.isInteger(secondVal)){
        return "ERROR";
    }


    let sum=0;
    for(let i=firstVal; i<=secondVal; i++){
        sum+=i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
