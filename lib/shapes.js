class Shape {
    constructor() {
      this.color = 'black';
    }
  
    setColor(color) {
      this.color = color;
    }
  }
  
  class Triangle extends Shape {
    render(userText, textColor, textSize = 30) {
      const fill = this.color;
  
      const centerX = 100;
      const centerY = 100;
      const textY = centerY + 30;
  
      return `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
        <polygon points="100,25 175,175 25,175" fill="${fill}" />
        <text x="${centerX}" y="${textY}" text-anchor="middle" fill="${textColor}" font-size="${textSize}px">${userText}</text>
      </svg>`;
    }
  }
  
  class Circle extends Shape {
    render(userText, textColor, textSize = 30) {
      const cx = 100;
      const cy = 100;
      const r = 50;
      const fill = this.color;
  
      const centerX = cx;
      const centerY = cy + textSize / 3;
  
      return `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
        <circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" />
        <text x="${centerX}" y="${centerY}" text-anchor="middle" fill="${textColor}" font-size="${textSize}px">${userText}</text>
      </svg>`;
    }
  }
  
  class Square extends Shape {
    render(userText, textColor, textSize = 30) {
      const fill = this.color;
  
      const centerX = 100;
      const centerY = 100;
  
      return `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
        <rect x="50" y="50" width="100" height="100" fill="${fill}" />
        <text x="${centerX}" y="${centerY}" text-anchor="middle" fill="${textColor}" font-size="${textSize}px">${userText}</text>
      </svg>`;
    }
  }

  module.exports = { Triangle, Circle, Square };
  