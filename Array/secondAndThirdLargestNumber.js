let randomNumbersArr = new Array();
for(let i=0;i<10;i++){
    randomNumbersArr[i] = Math.floor(Math.random()*1000)%1000;
}
let max = -Infinity;
let min = Infinity;
let secondLargest = randomNumbersArr[0];
let secondSmallest = randomNumbersArr[0];
for(let i=1;i<10;i++){
    if(randomNumbersArr[i]>max){
        secondLargest = max;
        max = randomNumbersArr[i];
    }else if(randomNumbersArr[i]>secondLargest && randomNumbersArr[i] != max){
        secondLargest = randomNumbersArr[i];
    }
    if(randomNumbersArr[i]<min){
        secondSmallest = min;
        min = randomNumbersArr[i];
    }else if(randomNumbersArr[i]<secondSmallest && randomNumbersArr[i] != min){
        secondSmallest = randomNumbersArr[i];
    }
}
console.log("Second smallest is: "+secondSmallest+" second Largest number is: "+secondLargest);

// using sorting

randomNumbersArr.sort();
for(let i=0;i<randomNumbersArr.length;i++){
    console.log(randomNumbersArr[i]);
}
console.log("Second smallest is: "+randomNumbersArr[1]+" second Largest number is: "+randomNumbersArr[8]);