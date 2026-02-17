class Shape {
    constructor(){

    }
    area(){
        console.log('Area');
        
    }
}
class Square extends Shape{
    constructor(side){
        super()
        this.side = side
    }
    area(){
        console.log('Area of square: '+this.side*this.side);
        
    }
}
class Circle extends Shape{
   static PI = 3.14
    constructor(radius){
        super()                     //ts shi mandatory
        this.raduis = radius

    }
    area(){
        console.log('Area of circle: '+ Circle.PI*this.raduis*this.raduis);
        
    }
}
const c = new Circle(4)
const s = new Square(5)

c.area()
s.area()
