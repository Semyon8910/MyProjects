class BirthYearCounter {
    private userName:string;
    private userAge:number;
    public date:Date;
    public year:number;

    constructor(userName:string, userAge:number) {
        this.userName = userName;
        this.userAge = userAge;
        this.date = new Date();
        this.year = this.date.getFullYear();
    }

    public birthYear():number {
        return this.year - this.userAge;
    }
    public namePrint():string {
        return this.userName;
    }
}

let semyon = new BirthYearCounter("Semyon",35);

console.log(semyon.namePrint());
console.log(semyon.birthYear());
