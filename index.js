function map (src, callback) {
  let result = []
  for (let i=0; i< src.length; i++) {
    let el = src[i]
    result.push(callback(el))
  }
  return result
}
function reduce (src, callback, starting) {
  let r = (!!starting) ? starting : src[0]
 let i = (!!starting) ? 0 : 1

 for (; i < src.length; i++) {
   r = callback(src[i], r)
 }

 return r;
}
