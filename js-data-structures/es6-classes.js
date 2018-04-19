// *** ES6 CLASSES *** //
// OMG CLASSES ARE FINALLY HERE!!!

class Shape {
  constructor (id, x, y) {
    this.id = id;
    this.move(x, y);
  }

  move (x, y) {
    this.x = x;
    this.y = y;
  }
}

//OLD ES5 JAVASCRIPT 'class' CONSTRUCTOR OBJECT
var Shape = function (id, x, y) {
  this. id = id;
  this.move(x, y);
}

Shape.protoype.move = function (x, y) {
  this.x = x;
  this.y = y;
}

// INHERIRTANCE

class Rectangle extends Shape {
  constructor (id, x, y, width, height) {
    super(id, x, y) {
      this.width = width;
      this.height = height;
    }
  }
}

class Circle extends Shape {
  constructor (id, x, y, radius) {
    super (id, x, y)
    this.radius = radius;
  }
}

// Static Members

class Rectangle extends Shape {

  static defaultRectangle() {
    return new Rectange('default', 0, 0, 100, 100);
  }
}

class Circle extends Shape {
  static defaultCircle() {
    return new Circle('default', 0, 0, 100);
  }
}

var defRectangle = Rectangle.defaultRectangle();
var defCircle = Circle.defaultCircle();
