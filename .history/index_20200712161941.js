function map(arr, arrFunction){
  let newArr = []
  for (let item of arr) {
    newArr.push(arrFunction(item))
  }
  return newArr
}

function reduce(array, arrayFunction, startingPoint = 0){
  array.forEach(number => startingPoint += arrayFunction(array[number], startingPoint))
  debugger
}
