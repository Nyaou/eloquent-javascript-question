/*
questão 01
*/
var simbolo = '*'
for(var i = 0; i < 7; i++){
    console.log(simbolo)
    simbolo += '*'
}
/*
questão 02
*/
for(var i = 1;i <= 100;i++){
    var number = i;
    if((number % 3 == 0) && (number % 5 == 0)){
        console.log('FizzBuzz')
    }else if(number % 3 == 0){
        console.log('Fizz')
    }else if((number % 5 == 0) && (number % 3 != 0)){
        console.log('Buzz')
    }else{
        console.log(number)
    }
}
/*
questão 03
*/
var xadrez = ''
var linha1 = ''
var linha2 = ''
var charCount
var size
for(i = 0; i < size; i++){
    charCount = i % 2
    if(charCount == 0){
        linha1 += '_'
        linha2 += '#'
    }else if(charCount == 1){
        linha1 += '#'
        linha2 += '_'
    }
}
for(i = 0; i < (size / 2); i++){
    if(size % 2 == 0){
        if(i < (size -1)){
            xadrez += linha1 + '\n' + linha2 + '\n'
        }else if(i == (size -1)){
            xadrez += linha1 + '\n' + linha2
        }
    }else if(size % 2 == 1){
        console.log('aqui')
        if(i % 2 == 0 ){
            xadrez += linha1 + '\n'
            console.log('aqui1')
        }else if(i % 2 == 1){
            xadrez += linha2 + '\n' + linha1
            console.log('aqui2')
        }
    }
}
console.log(xadrez)