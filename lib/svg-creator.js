const fs = require('fs');
const { Triangle, Circle, Square } = require('./shapes');

function createSVGFile(userInput) {
    const shapeColor = userInput.shapeColor;
    let shape;
  
    switch (userInput.shape) {
      case 'circle':
        shape = new Circle();
        break;
      case 'triangle':
        shape = new Triangle();
        break;
      case 'square':
        shape = new Square();
        break;
      default:

        break;
    }
  
    shape.setColor(shapeColor);
  
    const fontSize = userInput.textSize;

    const svgContent = shape.render(userInput.text, userInput.textColor, fontSize);
  
    fs.writeFileSync('logo.svg', svgContent);
    console.log('Generated logo.svg');
  }

module.exports = { createSVGFile };