'use strict';

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this. width = width;

    }

    calcArea() {
        return this.height * this.width;
    }
}

class ColoredRectangleWithText extends Rectangle {
    constructor(height, width, text, bgColor) {
        super(height,width);
        this.text = text;
        this.bgColor = bgColor;
    }
    showMyProps() {
        console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
    }
}

const square = new Rectangle(5, 5);
const long = new Rectangle(20,100);
const div = new ColoredRectangleWithText(10,25, 'Hello', 'red');

console.log(square.calcArea());
console.log(long.calcArea());
div.showMyProps();
console.log(div.calcArea());