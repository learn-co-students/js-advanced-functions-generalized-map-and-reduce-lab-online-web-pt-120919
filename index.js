// Add your functions here
function map(array, callbackFunction) {
  let new_array = []
  for (let i = 0; i < array.length; i++) {
    new_array.push(callbackFunction(array[i]));
  }
  return new_array;
}

function reduce(array, callbackFunction, thingToChange) {
//decide if using integer or boolean to reduce
//if there is a value in thingToChange, use it. else, start with the first
//element in array

  let starterInt = (!!thingToChange) ? thingToChange : array[0];
  //if !!thingToChange returns truthy, i = 0. else, we start iterating at 1
  let i = (!!thingToChange) ? 0 : 1;

  for (i; i < array.length; i++) {
    starterInt = callbackFunction(array[i], starterInt)
  }
  return starterInt;
}
