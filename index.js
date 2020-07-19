const map = function(sourceArray, func) {
    let newArray = []
    for (let i = 0; i < sourceArray.length; i++) {
        newArray.push(func(sourceArray[i]))
    }
    return newArray
}

const reduce = function(sourceArray, block, startingPoint = 0) {
    let r = (!!startingPoint) ? startingPoint : sourceArray[0]
    let i = (!!startingPoint) ? 0 : 1

    for (; i < sourceArray.length; i++) {
        r = block(sourceArray[i], r)
    }
    return r
}