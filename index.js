// Add your functions here
function map(arr, func) {
    let new_arr = []
    arr.forEach(element => {
        new_arr.push(func(element))
    });
    return new_arr
}

function reduce(arr, func, stPoint) {
    let current 
    let index 
    if (!!stPoint) {
        current = stPoint
        index = 0
    } else {
        current = arr[0] 
        // if we need to accumulate all the elements in this array - [1,2,3] the current is already 
        // equal to 1, so we need to start iterating from the second element which we set on the next line
        index = 1
    }
    for(index; index < arr.length; index++) {
        current = func(arr[index], current)
    }
    return current
}