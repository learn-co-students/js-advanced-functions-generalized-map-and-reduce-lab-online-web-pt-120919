// Add your functions here
function map(array, callbackFunction) {
  let newArray = []

  for (let i = 0; i < array.length; i++) {
    newArray.push(callbackFunction(array[i]))
  }
  return newArray
}

function reduce(array, callbackFunction, startValue) {
  let total = !!startValue ? startValue : array[0]
  let i = !!startValue ? 0 : 1
  for (i; i < array.length; i++){
    total = callbackFunction(array[i], total)
  }
  return total
}
