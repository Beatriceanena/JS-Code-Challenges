//Given an integer num, write a function that repeatedly adds all its digits until the
// result has only one digit, and return it.

function addNumbers(){

let num=38;
let lastDigit=0;
let sumOfDigits=0;
while(num!=0){
    lastDigit = num%10;
    sumOfDigits+=lastDigit;
    num=parseInt(num/10);
}
 return sumOfDigits;
}
