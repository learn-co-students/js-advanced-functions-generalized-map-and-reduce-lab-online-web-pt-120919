// Add your functions here

// function map(source, callback) {
//     let mapped = source.map(callback)
//     return mapped;
// }

function map(source, callback) {
    let r = []

    for (let i = 0; i < source.length; i++) {
        let theElement = source[i]
        r.push(callback(theElement))
    }
    return r;
}


function reduce(source, callback, starting) {
    let r = (!!starting) ? starting : source[0]
    let i = (!!starting) ? 0 : 1

    for (; i < source.length; i++) {
        r = callback(source[i], r)
    }
    return r;
} 






// work on this reduce function

// function reduce(source, callback, starting) {
//     console.log(starting)
//     let notOne = source[0] == 1 ? 0 : source[0]
//     let validStart = (!!starting) ? starting : notOne
//     console.log(validStart)
//     let reduced = source.reduce((callback), validStart)
//     console.log(reduced)
//     return reduced;
// }

// function reduce(source, callback, starting) {
//     let validStart 
//     let reduced = source.reduce((callback), validStart)
//     return reduced;
// }


