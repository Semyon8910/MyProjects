class Car {
    private carNumber: string | number;
    private manufacturer: string;
    private model: string;
    private color: string;
    private year: number;
    private engine: string | number;
    private speed: number;

    constructor(carNumber: string | number, manufacturer: string, model: string, color: string, year: number, engine: string | number, speed: number){
        this.carNumber = carNumber;
        this.manufacturer = manufacturer;
        this.model = model;
        this.color = color;
        this.year = year;
        this.engine = engine;
        this.speed = 0;
    }

    public setCarNumber(carNumber: string | number):void {
        this.carNumber = carNumber;
    }
    public setManufacturer(manufacturer: string):void {
        this.manufacturer = manufacturer;
    }
    public setModel(model: string):void {
        this.model = model;
    }
    public setColor(color: string):void {
        this.color = color;
    }
    public setYear(year: number):void {
        this.year = year;
    }
    public setEngine(engine: string | number):void {
        this.engine = engine;
    }
    public setSpeed(speed: number):void {
        this.speed = speed;
    }

    public print():void{
        console.log(`
        Car nubmer: ${this.carNumber}
        Manufacturer: ${this.manufacturer}
        Model: ${this.model}
        Color: ${this.color}
        Year: ${this.year}
        Engine: ${this.engine}
        Speed: ${this.speed}
        `)
    }

    public slow():void {
        if(this.speed==0) {
            return;
        } else {
        this.speed = this.speed - 10;
        }
    }

    public fast():void {
        this.speed = this.speed + 10;
    }

    public stop():void {
        this.speed = 0;
    }
}

let toyota = new Car ("43-212-34", "toyota", "corolla", "white", 2006, 1.6, 180)

toyota.fast();

toyota.setEngine(2.5);

toyota.print();