var odd=0;
var even=0;
var num=[];
for (var index=0;index<5;index++){
    num.push(Number(prompt("enter a number")));
    if (num[index]%2==0){
        even++
    } else {odd++
    }
}
console.log("odd=",odd);
console.log("even=",even);