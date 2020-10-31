//forEach(callback(currentValue [, index [, array]])
function newForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    let item = array[index];
    callback(item, index, array); // adicionar todos os argumentos no callback
  }
  return undefined;
}

//map(function callback( currentValue[, index[, array]])
function newMap(array, callback) {
  let newArray = [];
  for (let index = 0; index < array.length; index++) {
    let item = array[index];
    newArray.push(callback(item, index, array)); // adicionar o callback dentro do push
  }
  return newArray;
}

//some(callback(element[, index[, array]])[, thisArg])
function newSome(array, callback) {
  for (let index = 0; index < array.length; index++) {
    let item = array[index];
    if (callback(item, index, array) === true) {
      return true;
    }
  }
  return false;
}

//find()
function newFind(array, callback) {
  for (let index = 0; index < array.length; index++) {
    let item = array[index];
    if (callback(item, index, array) === true) {
      return item;
    }
  }
  return undefined;
}

//findIndex()
function newFindIndex(array, callback) {
  for (let index = 0; index < array.length; index++) {
    let item = array[index];
    if (callback(item, index, array) === true) {
      return index;
    }
  }
  return -1;
}

//every()
function newEvery(array, callback) {
  for (let index = 0; index < array.length; index++) {
    let item = array[index];
    if (callback(item, index, array) === false) {
      return false;
    }
  }
  return true;
}

//filter()
function newFilter(array, callback) {
  let newArray = [];
  for (let index = 0; index < array.length; index++) {
    let item = array[index];
    if (callback(item) === true) {
      newArray.push(item);
    }
  }
  return newArray;
}

//concat()
function newConcat(mainArray, addArrays) {
  let newArray = mainArray;
  for (let index = 0; index < addArrays.length; index++) {
    for (let secondIndex = 0; secondIndex < addArrays[index]; secondIndex++) {
      mainArray.push(addArrays[index][secondIndex]);
    }
  }
  return newArray;
}

//includes()
function newIncludes(array, valueToFind, indexStart) {
  if (typeof indexStart === undefined) {
    indexStart = 0;
  }
  for (let index = indexStart; index < array.length; index++) {
    let item = array[index];
    if (item === valueToFind) {
      return true;
    }
  }
  return false;
}

//join()
function newJoin(array, separator) {
  if (array.length === 0) {
    return "";
  }
  if (separator === undefined) {
    separator = ",";
  }
  let finalString = array[0];
  for (let index = 1; index < array.length; index++) {
    let item = array[index];
    finalString = finalString.concat(separator, item);
  }
  return finalString;
}

//slice()
function newSlice(array, start, end) {
  conditionalsForSlice(start, end);
  let newArray = [];
  for (let index = start; index < end; index++) {
    let item = array[index];
    newArray.push(item);
  }
  return newArray;
}

function conditionalsForSlice(start, end) {
  if (typeof start === undefined) {
    start = 0;
  }
  if (start < 0) {
    start = array.length - start;
  }
  if (typeof end === undefined) {
    end = array.length;
  }
  if (end < 0) {
    end = array.length - end;
  }
  return start, end;
}

//flat()

//
//
//
//
//
//
//
//
//
//
//
//

//flatMap()
function newFlatMap(array, callback) {
  let newArray = [];
  for (let index = 0; index < array.length; index++) {
    let item = array[index];
    newArray.push(callback(item, index, array));
  }
  return newArray;
}

//Array.of() //como acessar a quantidade de elementos que foi dada, sem ter como parametro a quantidade total?

//
//
//
//
