// Add your functions here


function map(array, callback){
    let newArray = []
    for(let i = 0; i < array.length; i++){
        let element = array[i]
        newArray.push(callback(element))
    }
    return newArray
}

function reduce(array, callback, starter) {
    let x = (!!starter) ? starter : array[0]
    let i = (!!starter) ? 0 : 1
    for(; i < array.length; i++){
        x = callback(array[i], x)
    }
  return x
}




