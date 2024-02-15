class Cinema {
    private cinemaName: String;
    private numberOfEnters: number;
    private openTime: number;
    private closeTime: number;

    constructor(cinemaName: String, numberOfEnters: number, openTime: number, closeTime: number){
        this.cinemaName = cinemaName;
        this.setNumberOfEnters = numberOfEnters;
        this.setOpenTime = openTime;
        this.setCloseTime = closeTime;
    }

    public set setNumberOfEnters(numberOfEnters: number){
        if(numberOfEnters<1){
            console.log("number have to be only positive");
            this.numberOfEnters = 1;
        } else {
            this.numberOfEnters = numberOfEnters;
        }
    }

    public set setOpenTime(openTime: number){
        if(openTime>12 || openTime<6) {
            console.log("wrong time");
            this.openTime = 6;
        } else {
            this.openTime = openTime;
        }
    }

    public set setCloseTime(closeTime: number){
        if(closeTime<18 || closeTime>23) {
            console.log("wrong time");
            this.closeTime = 23;
        } else {
            this.closeTime = closeTime;
        }
    }

    public openHours():number{
        return this.closeTime - this.openTime;
    }

    public print():void{
        console.log(`
        Name: ${this.cinemaName}
        Number of enters: ${this.numberOfEnters}
        Open Time: ${this.openTime}
        Close Time: ${this.closeTime}
        Open hours: ${this.openHours()}
        `);
    }

}

let hot = new Cinema ("HOT Cinema",2,6,10);

hot.print();