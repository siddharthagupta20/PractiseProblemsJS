let repeatedDigitNumbers = new Array();

for(let i=10;i<=100;i++){
    let digit1 = Math.floor(i/10);
    let digit2 = Math.floor(i%10);
    if(digit1 == digit2){
        repeatedDigitNumbers.push(i);
    }
}

repeatedDigitNumbers.forEach(number=> console.log(number));
