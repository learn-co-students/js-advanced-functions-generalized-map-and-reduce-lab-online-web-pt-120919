// import { start } from "repl"

function map(arr, arrFunction){
  let newArr = []
  for (let item of arr) {
    newArr.push(arrFunction(item))
  }
  return newArr
}

function reduce(array, arrayFunction, startingPoint){
  if (array.some(true, false)) {
    console.log('toooooo')
  }
  array.forEach(number => {
    startingPoint = arrayFunction(number, startingPoint)
  
  })
  return startingPoint
}
