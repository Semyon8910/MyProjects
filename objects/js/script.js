const student1={
    studentName:'Moshe',
    studentClass: 12,
    grades: [90,80,78,97,87],
    average: function () {
        var avg=0;
        for(var index=0; index<this.grades.length; index++) {
            avg+=this.grades[index];
        }
        return avg/this.grades.length;
    }
}
console.log(student1.average());
