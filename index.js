// Add your functions here
function map(array, element){
    let newArray = []

    for (let i =0; i < array.length; i++){
        let data = array[i]
        newArray.push(element(data))
    }
    return newArray;
}

function reduce(array, element, start) {
    let a = (!!start) ? start : array[0]
    let i = (!!start) ? 0 : 1

    for(; i < array.length; i++){
        a = element(array[i], a)
    }
    return a;
}