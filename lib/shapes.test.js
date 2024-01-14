// import shapes
const { Triangle, Square, Circle } = require("./shapes.js")

// testing suite for shapes
describe('Shapes', () => {
    // checks triangle
    describe('triangle', () => {
        it('should render an svg triangle with provided text and colors', () => {
            const logo = new Triangle("SVG", "white", "blue");
            expect(logo.render()).toEqual('<svg version="1.1" width="100" height="100" xmlns="http://www.w3.org/2000/svg"> <polygon points="50,13.397 100,100 0,100" fill="blue" /><text x="50" y="73" font-size="20" text-anchor="middle" fill="white">SVG</text></svg>');
        });
    });
  
    // checks square
    describe('square', () => {
        it('should render an svg square with provided text and colors', () => {
            const logo = new Square("SVG", "white", "blue");
            expect(logo.render()).toEqual('<svg version="1.1" width="100" height="100" xmlns="http://www.w3.org/2000/svg"> <rect width="100" height="100" fill="blue" /><text x="50" y="55" font-size="20" text-anchor="middle" fill="white">SVG</text></svg>');
        });
    })

    // checks circle
    describe('circle', () => {
        it('should render an svg circle with provided text and colors', () => {
            const logo = new Circle("SVG", "white", "blue");
            expect(logo.render()).toEqual('<svg version="1.1" width="100" height="100" xmlns="http://www.w3.org/2000/svg"> <circle cx="50" cy="50" r="40" fill="blue" /><text x="50" y="55" font-size="20" text-anchor="middle" fill="white">SVG</text></svg>');
        });
    })
});