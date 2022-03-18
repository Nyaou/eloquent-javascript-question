/*
questão 01
*/
function range (start,end){
    var numbers = []
    for (var i = start; i <= end; i++){
        numbers.push(i)
    }
    return numbers
}
function sum (array){
    var counter = 0
    for(var i = 0; i < array.length ; i++){
        counter += array[i]
    }
    return counter
}
console.log(sum(range(1, 10)))
/*
questão 02
*/
function reverseArray(array){
    var replaceArray = []
    var indexArray = array.length - 1
    for(var i = indexArray; i >= 0; i--){
        replaceArray.push(array[i])
    } 
    return replaceArray
}
console.log(reverseArray(["A", "B", "C"]))

function reverseArrayInPlace (array){
    var arrayLength = array.length
    var tamArray 
    var indexLeft
    var indexRight
    if(arrayLength % 2 == 0){
        tamArray = arrayLength
        indexLeft = 0
        indexRight = tamArray - 1
        console.log(tamArray)
        for(var i = 0; i < (tamArray / 2); i++){
            let left = array[indexLeft]
            let right = array[indexRight]
            array[indexLeft] = right
            array[indexRight] = left
            indexLeft += 1
            indexRight -= 1
        }
    }else if(arrayLength % 2 == 1){
        tamArray = arrayLength - 1
        indexLeft = 0
        indexRight = tamArray
        for(var i = 0; i <= (tamArray / 2); i++){
            let left = array[indexLeft]
            let right = array[indexRight]
            array[indexLeft] = right
            array[indexRight] = left
            indexLeft += 1
            indexRight -= 1
        }
    }
    return array
}
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue)
/*
questão 03
*/
function arrayToList(array){
    var list
    var numberArray = array.length - 1
    var objt0
    var objt1
    for(var i = numberArray; i >= 0; i--){
        if(i == numberArray){
            objt0 = {value:array[i],rest:null}
        }else{
            objt1 = {value: array[i], rest: objt0}
            objt0 = objt1
        }
    }
    return list = objt0
}
function listToArray(list){
    var array = []
    for (var node = list; node; node = node.rest){
        array.push(node.value)
    }
    return array
}
function prepend(valor,list){
    var newList = {
        value: valor,
        rest: list
    }
    return newList
}
function nth(list,number){
    var voltasNoLoop = 0
    if(voltasNoLoop > number){
        return undefined
    }else{
        for(var node = list; node; node = node.rest){
            if(voltasNoLoop == number){
                return node.value
            }else{
                voltasNoLoop += 1
            }
        }
    }
}
nth(arrayToList([10, 20, 30]), 1)
console.log(prepend(10, prepend(20, null)))
console.log(listToArray(arrayToList([10, 20,30])))
/*
questão 04
*/
function deepEqual(v1,v2){
    var tpof1 = typeof v1
    var tpof2 = typeof v2 
    
    var isNumber = (tpof1 == 'number') && (tpof2 == 'number')
    var isString = (tpof1 == 'string') && (tpof2 == 'string')
    var isBoolean = (tpof1 == 'boolean') && (tpof2 == 'boolean')
    var isNull = (v1 == null) && (v2 == null)
    var isObject = (v1 != null && tpof1 == 'object') && (v2 != null && tpof2 == 'object')
    var isNullOrObject = (v1 == null || tpof1 == 'object') && (v2 == null || tpof2 == 'object')

    if(tpof1 != tpof2){
        return false
    }else if(isNumber){
        if(v1 === v2){
            return true
        }else{
            return false
        }
    }else if(isString){
        if(v1 === v2){
            return true
        }else{
            return false
        }
    }else if(isBoolean){
        if(v1 === v2){
            return true
        }else{
            return false
        }
    }else if(isNull){
        return true
    }else if(isObject){
        let v1length = v1.length
        let v2length = v2.length
        if((v1length == undefined) && (v2length == undefined)){
            for( var element in v1){
                if(typeof v1[element] === 'object'){
                    return deepEqual(v1[element],v2[element])
                }else{
                    if(v1[element] == v2[element]){
                        return true
                    }else{
                        return false + 'passou aqui'
                    }
                }
            }
        }else if((v1length == undefined) || (v2length == undefined)){
            return false
        }else{
            if(v1 == v2){
                return true
            }else{
                return false
            }
        }
    }else if(isNullOrObject){
        return false
    }
}
