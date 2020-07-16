// Add your functions here
function map(arr, foo) {
  let tmp = [];
  for (let i = 0; i < arr.length; i++) {
    tmp.push(foo(arr[i]));
  }
  return tmp;
}

function reduce(arr, start = 0) {
  let total = start;
  for (let i = 0; i < arr.length; i++) {
    tmp.push(foo(arr[i]));
  }
  return tmp;
}

function reduce(arr, foo, start){
  let total;
  if (!!start) {
    total = start;
  } else {
    total = arr[0];
  }
  
  for ( let i = !!start ? 0 : 1; i < arr.length; i++) {
    total = foo(arr[i], total)
  }
  return total
}