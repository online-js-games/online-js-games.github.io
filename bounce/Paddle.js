class Paddle {
    constructor(x, y, width, height, speed) {
        this.rect = {
            x: x,
            y: y,
            width: width,
            height: height
        }
        this.speed = Math.abs(speed);

        this.moving_left = false;
        this.moving_right = false;
    }
    moveLeft() {
        this.rect.x -= this.speed;
        this.moving_left = true;
        if(this.rect.x < 0) {
            this.rect.x = 0;
            this.moving_left = false;
        }
    }
    moveRight() {
        this.rect.x += this.speed;
        this.moving_right = true;
        if(this.rect.x + this.rect.width > canvas_width) {
            this.rect.x = canvas_width - this.rect.width;
            this.moving_right = false;
        }
    }
    render() {
        context.fillStyle = "#0000ff";
        _fillRect(this.rect, context);
    }
}