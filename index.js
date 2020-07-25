function map(array, functions) {
    return array.map(element => functions(element))
    
    // let r = []

    // for (let i = 0; i < array.length; i++) {
    //     let theElement = array[i]
    //     r.push(cb(theElement))
    // }
    // return r;
}

function reduce(array, functions, starting){
    let r = (!!starting) ? starting : array[0]
    let i = (!!starting) ? 0 : 1

    for (; i < array.length; i++) {
        r = functions(array[i], r)
    }
    return r;
}
