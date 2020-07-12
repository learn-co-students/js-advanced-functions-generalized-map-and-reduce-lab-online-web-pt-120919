function map(arr, arrFunction){
  let newArr = []
  for (let item of arr) {
    newArr.push(arrFunction(item))
  }
  return newArr
}

function reduce(array, arrayFunction, startingPoint = array[0]){
  array.forEach(number => {startingPoint += arrayFunction(number, startingPoint)})
  return startingPoint
}
