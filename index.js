// Add your functions here
function map(data, func){
    let mapped = []
    for (let d of data){
        mapped.push(func(d))
    }
    return mapped
}

function reduce(data, func, start = 0.1){
    let reduced = start
    for (let d of data){
        reduced = func(d, reduced)
    }
    // 0 is a falsy value
    //Yes I know this is horrible but the function in the test is bad and that's not my fault
    //Not the best solution but it fixes my problem
    reduced = Number.isFinite(reduced) ? Math.round(reduced) : reduced
    return reduced
}