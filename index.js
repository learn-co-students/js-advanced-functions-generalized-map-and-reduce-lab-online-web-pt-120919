// Add your functions here
function map(arr, cb){
    let newArr = []

for (let i = 0; i < arr.length; i ++){
    let item = arr[i]
    newArr.push(cb(item))
}
return newArr;
}

function reduce(arr,cb, startingValue){
let total = !!startingValue ? startingValue : arr[0]
  let i = !!startingValue ? 0 : 1
 for ( i ; i < arr.length; i ++){
   total = cb(arr[i], total)
}
return total
}