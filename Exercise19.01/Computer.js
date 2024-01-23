class Computer {
    constructor (ram,hdd,processor,price,warranty) {
        this._ram=ram;
        this._hdd=hdd;
        this._processor=processor;
        this._price=price;
        this._warranty=warranty;
    }
    set setRam(ram) {
        if (ram>=4 && ram<=16) {
            this._ram=ram;
        } else {return "invalid value";}
    }

    set setHdd(hdd) {
        if (hdd>=200 && hdd<=3000) {
            this._hdd=hdd;
        } else {return "invalid value";}
    }

    set setProcessor(processor) {
        this._processor=processor;
    }

    set setPrice(price) {
        if (price>=800 && price<=20000) {
            this._price=price;
        } else {return "invalid value";}
    }

    set setWarranty(warranty) {
        if (warranty>=0 && warranty<=5) {
            this._warranty=warranty;
        } else {return "invalid value";}
    }

    get getRam(){
        return this._ram;
    }

    get getHdd() {
        return this._hdd;
    }

    get getProcessor() {
        return this._processor;
    }

    get getPrice() {
        return this._price;
    }

    get getWarrenty() {
        return this._warranty;
    }

    equipment () {
        return "do you want to add a headphones to you purchase?"
    }
    print () {
        return `RAM: ${this._ram}, HDD: ${this._hdd}, Processor: ${this._processor}, Price: ${this._price} NIS, Warrenty: ${this._warranty} Years`
    }
}

class Desktop extends Computer {
    constructor (ram,hdd,processor,price,warranty,wirelessMouse,display) {
        super(ram,hdd,processor,price,warranty)
        this._wirelessMouse=wirelessMouse;
        this._display=display;
    }

    set setMouse (wirelessMouse) {
        if (wirelessMouse instanceof Boolean) {
            this._wirelessMouse = wirelessMouse;
        } else {return "invalid value";}
    }

    set setDisplay (display) {
        if (display>=11 && display<=18) {
            this._display=display;
        } else {return "invalid value";}
    }

    get getMouse () {
        return this._wirelessMouse;
    }

    get getDisplay () {
        return this._display;
    }

    equipment () {
        return "do you whant to add a comuter table to you purchase?"
    }

    print () {
        return `${super.print()}, Wireless Mouse: ${this._wirelessMouse}, Display: ${this._display} inch`;
    }
}

class Laptop extends Computer {
    constructor (ram,hdd,processor,price,warranty,chargeTime,charge,touchScreen) {
        super(ram,hdd,processor,price,warranty);
        this._chargeTime = chargeTime;
        this._charge = charge;
        this._touchScreen = touchScreen;
    }

    set setChargeTime (chargeTime) {
        if (chargeTime>=1 && chargeTime<=9) {
            this._chargeTime = chargeTime;
        } else {return "invalid value";}
    }

    set setCharge (charge) {
        if (charge>=0 && charge<=100) {
            this._charge = charge;
        } else {return "invalid value";}
    }

    set setTouchScreen (touchScreen) {
        if (touchScreen instanceof Boolean) {
            this._touchScreen = touchScreen;
        } else {return "invalid value";}
    }

    get getChargeTime () {
        return this._chargeTime;
    }

    get getCharge () {
        return this._charge;
    }

    get getTouchScreen () {
        return this._touchScreen;
    }

    equipment () {
        return `do you whant to add a comuter bag to you purchase?
                ${super.equipment()}`;
    }

    charging () {
        this._charge = 100;
        return "charging complite"
    }

    print () {
        return `${super.print()}, charging time: ${this._chargeTime}, charge level: ${this._charge}, touch screen: ${this._touchScreen}`
    }
}

let laptop = new Laptop(16,1000,"intel",1000,2,5,90,true);

function executeAction () {
    if (this instanceof Laptop) {
        this.equipment();
        this.print();
    } else if (this instanceof Desktop) {
        this.equipment();
        this.print();
    }
}

console.log(executeAction());