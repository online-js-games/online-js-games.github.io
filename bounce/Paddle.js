class Paddle {
    constructor(x, y, width, height, speed) {
        this.rect = {
            x: x,
            y: y,
            width: width,
            height: height
        }
        this.speed = Math.abs(speed);
    }
    moveLeft() {
        this.rect.x -= this.speed;
        if(this.rect.x < 0) {
            this.rect.x = 0;
        }
    }
    moveRight() {
        this.rect.x += this.speed;
        if(this.rect.x + this.rect.width > canvas_width) {
            this.rect.x = canvas_width - this.rect.width;
        }
    }
    render() {
        context.fillStyle = "#0000ff";
        _fillRect(this.rect, context);
    }
}