// Add your functions here
function map(source, callBack) {
    let arr = []
  for (let i = 0; i < source.length; i++ ) {
    arr.push(callBack(source[i])) 
  }
  return arr
}

function reduce(source, callBack, start) {
    let r = (!!start) ? start : source[0]
    let i = (!!start) ? 0 : 1

  for (; i < source.length; i++) {
    r = callBack(source[i], r)
  }

  return r;
}