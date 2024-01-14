// import shapes
const { Triangle, Square, Circle } = require("./shapes.js")

// testing suite for shapes
describe('Shapes', () => {
    // checks triangle
    describe('triangle', () => {
        it('should render an svg triangle with provided text and colors', () => {
            const logo = new Triangle("SVG", "white", "blue");
            expect(logo.render()).toEqual('<svg width="100" height="100"> <polygon points="50,13.397 100,100 0,100" fill="blue" /><text x="50" y="73" font-size="20" text-anchor="middle" fill="white">SVG</text></svg>');
        });
    });
  
    // checks square
    describe('square', () => {
        it('should render an svg square with provided text and colors', () => {
            const logo = new Square("SVG", "white", "blue");
            expect(logo.render()).toEqual('<svg width="100" height="100"> <rect width="100" height="100" fill="blue" /><text x="50" y="55" font-size="20" text-anchor="middle" fill="white">SVG</text></svg>');
        });
    })

    // checks circle
    describe('circle', () => {
        it('should render an svg circle with provided text and colors', () => {
            const logo = new Circle("SVG", "white", "blue");
            expect(logo.render()).toEqual('<svg width="100" height="100"> <circle cx="50" cy="50" r="40" fill="blue" /><text x="50" y="55" font-size="20" text-anchor="middle" fill="white">SVG</text></svg>');
        });
    })
});