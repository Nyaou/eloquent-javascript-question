/*
questão 01
*/
function minimo (value1,value2){
    if(value1 > value2){
        return value2
    }else{
        return value1
    }
}
minimo(3,4)
/*
questão 02
*/
function isEvem (numero){
    if(numero == 0){
        return true
    }else if(numero == 1){
        return false
    }else if(numero < 1){
        return isEvem(numero + 2)
    }else if(numero > 1){
        return isEvem(numero - 2)
    }
}
isEvem(-1)
/*
questão 03
*/
function countBs (string){
    var counter = 0
    for(var i = 0; i < string.length; i++){
        if(string.charAt(i) === 'B' ){
            counter += 1
        }
    }
    return counter
}

function countChar(string,char){
    var counter = 0
    console.log(string.length)
    for(var i = 0; i < string.length; i++){
        console.log('passou')
        if(string.charAt(i) === char){
            console.log('erapracontar')
            counter += 1
        }
    }
    return counter
}
countBs('BBC')
countChar('kakkerlak','k')