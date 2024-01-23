class Circle {
    constructor (x,y,color,radius){
        this.x=x;
        this.y=y;
        this.color=color;
        this.radius=radius;
    }

    static pi=3.14;

    set setX(x){
        this.x=x;
    }

    set setY(y){
        this.y=y;
    }

    set setColor(color){
        this.color=color;
    }

    set setRadius(radius){
        this.radius=radius;
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

    get getRadius(){
        return this.radius;
    }

    toString (){
        return(`X=${this.x},Y=${this.y},Color=${this.color},Radius=${this.radius}`)
    }

    get getCenter () {
        let center = Math.sqrt(this.x**2+this.y**2);
        return center;
    }

    get getArea (){
        let area = Circle.pi*this.radius**2;
        return area; 
    }
    get getPerimeter (){
        let perimeter = Circle.pi*this.radius*2;
        return perimeter;
    }
}

let circle = new Circle(40,50,"red",10);
console.log(circle.toString());
console.log(circle.getArea);
console.log(circle.getPerimeter);
console.log(circle.getCenter);