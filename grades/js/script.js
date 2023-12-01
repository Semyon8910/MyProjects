var grades=[];
var index=0;
var indexG=0;
var lowGrade=100;
var highGrade=0;
var avg=0;
while (grades[indexG-1]!=101) {
    grades.push(Number(prompt("enter a grade")));
    indexG++;
}


for (var index=0;index<grades.length-1;index++){
    //look for the lowest grade
    if (grades[index]<lowGrade){
        lowGrade=grades[index];
    }
    if (grades[index]>highGrade){
        highGrade=grades[index];
    }
    avg+=grades[index];
}
avg/=grades.length;

console.log("lowest grade:",lowGrade);
console.log("highest grade:",highGrade);
console.log("average:",avg);