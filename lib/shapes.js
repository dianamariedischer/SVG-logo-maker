// Shape constructor
class Shape {
    constructor(text, textColor, shapeColor) {
      this.text = text;
      this.textColor = textColor;
      this.shapeColor= shapeColor;
    }
}

// Triangle constructor inherits shape and adds svg function that specifically creates an svg triangle
class Triangle extends Shape {
    constructor(text, textColor, shapeColor) {
      super(text, textColor, shapeColor);
    }
    // extends shape by writing svg using user input
    render() {
        return `<svg version="1.1" width="100" height="100" xmlns="http://www.w3.org/2000/svg"> <polygon points="50,13.397 100,100 0,100" fill="${this.shapeColor}" /><text x="50" y="73" font-size="20" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
    } 
}

// Square constructor inherits shape and adds svg function that specifically creates an svg square
class Square extends Shape {
    constructor(text, textColor, shapeColor) {
      super(text, textColor, shapeColor);
    }
    // extends shape by writing svg using user input
    render() {
        return `<svg version="1.1" width="100" height="100" xmlns="http://www.w3.org/2000/svg"> <rect width="100" height="100" fill="${this.shapeColor}" /><text x="50" y="55" font-size="20" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
    } 
}

// Circle constructor inherits shape and adds svg function that specifically creates an svg circle
class Circle extends Shape {
    constructor(text, textColor, shapeColor) {
      super(text, textColor, shapeColor);
    }
    // extends shape by writing svg using user input
    render() {
        return `<svg version="1.1" width="100" height="100" xmlns="http://www.w3.org/2000/svg"> <circle cx="50" cy="50" r="40" fill="${this.shapeColor}" /><text x="50" y="55" font-size="20" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
    } 
}

module.exports = { Triangle, Square, Circle }