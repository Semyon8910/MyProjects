class Animal {
    constructor(name, sound){
        this.name = name;
        this.sound = sound;
        this.isAlive = true;
    }

    eat(eatAnimal){
        if(this instanceof Lion || this instanceof Cat)
        eatAnimal.isAlive = false;
    }
}

class Cat extends Animal {
    constructor(name,sound,isAlive){
        super(name, sound ,isAlive);
    }
    drink(drinkCow){
        if (drinkCow.giveMilk() == true) {
            return "drink milk";
        } else {
            return "the cow is dead";
        }
    }  
} 

class Cow extends Animal {
    constructor(name, sound, isAlive){
        super(name, sound, isAlive);
    }
    giveMilk(){
        return this.isAlive;
    }
}

class Lion extends Animal {
    constructor(name, sound, isAlive){
        super(name, sound, isAlive);
    }
}

class Mouse extends Animal {
    constructor(name, sound, isAlive){
        super(name, sound, isAlive);
    }
}

let lion = new Animal("Mufasa", "Everething the light touches is our kindom");
let cow = new Cow("Cow", "Muuuuu");
let cat = new Cat("Chupakabra", "meeeeeeeeeeeew");
let mouse = new Mouse("Mouse", "piiiiiii");
lion.eat(cow);
console.log(cat.drink(cow));
mouse.eat(cat);
console.log(cat.isAlive);