class Salary{
    constructor(name,salary) {
    this.name = name;
    this.salary = salary;
    }
    maaser(){
        return this.salary/10;
    }
    afterTaxes(){
        return this.salary*0.75;
    }

    //getters
    get getName(){
        return this.name;
    }
    get getSalary(){
        return this.salary;
    }
    //setters
    set setName(name){
        this.name=name;
    }

    set setSalary(salary){
        this.salary=salary;
    }
}

var john = new Salary("John",11000);
var kate = new Salary("Kate",13000);
var billy = new Salary("Billy",7000);

console.log(john.getName);
