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
    let i 
    if (!!stPoint) {
        current = stPoint
        i = 0
    } else {
        current = arr[0]
        i = 1
    }
    
    for(i; i < arr.length; i++) {
        current = func(arr[i], current)
    }
    return current
}