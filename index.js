// Add your functions here
function mapToNegativize(sourceArray) {
    let newSourceArray = []
    for (let i = 0; i < sourceArray.length; i++ ) {
        newSourceArray.push(sourceArray[i] * -1)
    }
    return newSourceArray
}

function map(sourceArray, cb) {
    let newSourceArray = []
    for (let i = 0; i < sourceArray.length; i++ ) {
        let theElement = sourceArray[i]
        newSourceArray.push(cb(theElement))
    }
    return newSourceArray;
}

function reduceToTotal(sourceArray, startingPoint=0) {
    let total = startingPoint
    for (let i = 0; i < sourceArray.length; i++) {
        total = total + sourceArray[i]
    }
    return total 
}

function reduce(sourceArray, cb, starting) {
    let newSourceArray = (!!starting) ? starting : sourceArray[0]
    let i = (!!starting) ? 0 : 1

    for (; i < sourceArray.length; i++) {
        newSourceArray = cb(sourceArray[i], newSourceArray)
    }
    return newSourceArray;
}
