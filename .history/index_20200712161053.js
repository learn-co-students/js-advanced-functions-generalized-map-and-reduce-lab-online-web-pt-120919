function map(arr, arrFunction){
  let newArr = []
  for (let item of arr) {
    newArr.push(arrFunction(item))
  }
  return newArr
}

function reduce(array, arrayFunction(number)){
  let total = 0
  for (let num of array) {
    total += arrayFunction(num)
  }
  console.log(total)
}
