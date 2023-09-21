const removeFromArray = function(arraySet, ...toRemove) {
    return arraySet.filter(val => !toRemove.includes(val));
};

// Do not edit below this line
module.exports = removeFromArray;
