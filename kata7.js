
//forEach(callback(currentValue [, index [, array]])
function newForEach (array) {
        for (let index = 0; index < array.length; index++){
            let item = array[index]
            callbackForEach(item)
        }
}

function callbackForEach (item,index,array){
        console.log(item) //instrução exemplo do callback
        return undefined
}

//map(function callback( currentValue[, index[, array]])
function newMap (array) {
    let newArray = []
    for (let index = 0; index < array.length; index++){
        let item = array[index]
        newArray.push(item)
        callbackForMap(item,index,newArray)
    }
    return newArray
}

function callbackForMap(item,index,array){
    item += 1 //instrução exemplo do callback
    array[index] = item
    return array
}

//some(callback(element[, index[, array]])[, thisArg])
function newSome(array) {
    for (let index = 0; index < array.length; index++){
        let item = array[index]
        if(callbackForSome(item) === true){
            return true
        }
   }
   return false
}

function callbackForSome(item,index,array){
        return item % 2 !== 0 //instrução exemplo do callback
}

//find()
function newFind(array) {
    for (let index = 0; index < array.length; index++){
        let item = array[index]
        if (callbackForFind(item) === true ){
            return item
        }
    }
    return undefined
}

function callbackForFind(item,index,array){
        if (item > 10 && item < 20){ //instrução exemplo do callback
            return true
        }
        return false
}
//findIndex()
function newFindIndex(array) {
    for (let index = 0; index < array.length; index++){
        let item = array[index]
        if (callbackForFindIndex(item) === true) {
            return index
        }
    }
    return -1
}

function callbackForFindIndex(item,index,array){
    if (item > 10 && item < 20){ //instrução exemplo do callback
        return true
    }
    return false
}

//every()
function newEvery (array) {
    for (let index = 0; index < array.length; index++){
        let item = array[index]
        if (callbackForEvery(item) === false) {
            return false
        }
    }
    return true
}

function callbackForEvery(item,index,array){
    if ( item > 10 && item < 20){
        return true
    }
    return false
}

//filter()
function newFilter(array) {
    let newArray = []
    for (let index = 0; index < array.length; index++){
        let item = array[index]
        if (callbackForFilter(item) === true){
            newArray.push(item)
        }
    }
    return newArray
}

function callbackForFilter(item,index,array){
    if ( item > 10 && item < 20){
        return true
    }
    return false
}

//concat()
function newConcat(mainArray,addArrays) {
    let newArray = mainArray
    for (let index = 0; index < addArrays.length; index++){
            for ( let secondIndex = 0; secondIndex < addArrays[index]; secondIndex++){
                mainArray.push(addArrays[index][secondIndex])
            }
    }
    return newArray
}

//includes()
function newIncludes(array, valueToFind,indexStart) {
        if (typeof indexStart === undefined){
            indexStart = 0
        }
    for (let index = indexStart; index < array.length; index++){
        let item = array[index]
            if (item === valueToFind){
                return true
            }
    }
    return false
}

//join()
function newJoin(array,separator) {
    if (array.length === 0){
        return ''
    }
    if (separator === undefined){
        separator = ','
    }
    let finalString = array[0]
    for (let index = 1; index < array.length; index++){
        let item = array[index]
        finalString = finalString.concat(separator, item)
    }
    return finalString
}


//slice()
function newSlice(array, start, end) {
    conditionalsForSlice(start, end)
    let newArray = []
    for (let index = start; index < end; index++){
        let item = array[index]
        newArray.push(item)
    }
    return newArray
}

function conditionalsForSlice(start, end){
    if (typeof start === undefined){
        start = 0
    }
    if (start < 0){
        start = array.length - start
    }
    if (typeof end === undefined){
        end = array.length
    }
    if (end < 0){
        end = array.length - end
    }
    return start, end
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
function newFlatMap(array) {
    let newArray = []
    for (let index = 0; index < array.length; index++){
        let item = array[index]
        newArray.push(callbackForFlatMap(item,index,array))
    }
    return newArray
}

function callbackForFlatMap(item) {
    item = item * 2 //instrução do callback
    return item
}

//Array.of() //como acessar a quantidade de elementos que foi dada, sem ter como parametro a quantidade total?


// 
// 
// 
// 