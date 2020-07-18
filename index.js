function map(sourceArray, callback) {
    let newArray = []
  
    for (let i = 0; i < sourceArray.length; i++) {
      newArray.push(callback(sourceArray[i]))
    }
  
    return newArray;
}

function reduce(sourceArray, callback, starting){
    let total = (!!starting) ? starting : sourceArray[0]
    let i = (!!starting) ? 0 : 1

    for (; i < sourceArray.length; i++) {
      total = callback(sourceArray[i], total)
    }
  
    return total;
  }
