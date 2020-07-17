array = [1, 2, 3, 4]

function map(array, fn){
  let newArray = []
  for (let i = 0; i < array.length; i++ ) {
    newArray.push(fn(array[i]))
  }
  return newArray

}

function toNegative(arrayElement) {
  return arrayElement * -1
}

function toOriginal(arrayElement) {
  return arrayElement
}

function toDouble(arrayElement) {
  return arrayElement * 2
}

function toSquared(arrayElement) {
  return arrayElement ** 2
}


function reduce(array, fn, start){
  // !! reduces a value to a boolean 

  let value = (!!start) ? start : array[0]
  let i = (!!start) ? 0 : 1

  for ( i ; i < array.length; i++){
    value = fn(array[i], value)
  }

  return value
}




// const newArray = map(array, toSquared)
// console.log(newArray)