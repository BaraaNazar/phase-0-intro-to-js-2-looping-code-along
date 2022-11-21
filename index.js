// Code your solutions in this file
let arrayMess = [];
function writeCards(array, event){
for (let i=0; i < array.length; i++){
    arrayMess[i]=`Thank you, ${array[i]}, for the wonderful ${event} gift!`
}
return arrayMess
}


function countDown(num){
    let result = [num]
    for(let i = 0 ; i <= result; i++){
    console.log(num--);
    } 
}
countDown(10)