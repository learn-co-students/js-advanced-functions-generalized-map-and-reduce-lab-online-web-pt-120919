function map(sourceArray, callback) {
    return sourceArray.map((value) => callback(value));
}

function reduce(sourceArray, callback, init){
    if (init){
        return sourceArray.reduce((accumulator, currentValue) => callback(accumulator, currentValue), init);
    }
    return sourceArray.reduce((accumulator, currentValue) => callback(accumulator, currentValue));
}


