class Shape {
    constructor(x, y, color) {
        this.x = x | 0;
        this.y = y;
        this.color = color;
    }
    set setX(x){
        this.x=x;
    }

    set setY(y){
        this.y=y;
    }

    set setColor(color){
        this.color=color
    }

    get getX(){
        return this.x;
    }

    get getY(){
        return this.y;
    }

    get getColor(){
        return this.color;
    }

    get getCenter () {
        let center = Math.sqrt(this.x**2+this.y**2);
        return center;
    }

    toString (){
        return(`X=${this.x},Y=${this.y},Color=${this.color},Radius=${this.radius}`)
    }
} 

class Circle extends Shape {
    constructor (x,y,color,radius) {
        super(x,y,color);
        this.radius=radius;
    }

    set setRadius(radius){
        this.radius=radius;
    }

    get getRadius(){
        return this.radius;
    }
}

let shape = new Shape(10,20,"red");

console.log(`X=${shape.x}, Y=${shape.y}, Color=${shape.color}`);
console.log(shape.center());


