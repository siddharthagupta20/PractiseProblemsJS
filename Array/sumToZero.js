let numArr = new Array();
for(let i=0;i<3;i++){
    numArr[i] = Math.floor(Math.random()*10);
}

var sum = numArr.reduce(function (a,b) {
    return a+b;
},0);

if(sum == 0){
    console.log("sum is zero");
}else{
    console.log("sum is not zero");
}
