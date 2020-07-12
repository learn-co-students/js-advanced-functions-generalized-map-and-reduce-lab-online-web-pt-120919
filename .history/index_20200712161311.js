function map(arr, arrFunction){
  let newArr = []
  for (let item of arr) {
    newArr.push(arrFunction(item))
  }
  return newArr
}

function reduce(array, arrayFunction){
  debugger
  let total = 0
  array.forEach(number => total += arrayFunction(number))
}
