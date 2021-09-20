class Ball {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;

        this.setRect();
        this.setSpeed();
    }
    update() {
        this.x += this.speed_x;
        this.y += this.speed_y;

        if(this.x - this.radius < 0) {
            this.x = this.radius;
            this.reflectX();
        }
        else if(this.x + this.radius > canvas_width) {
            this.x = canvas_width - this.radius;
            this.reflectX();
        }
        else if(this.y - this.radius < 0) {
            this.y = this.radius;
            this.reflectY();
        }
        else if(this.y > canvas_height) {
            this.respawn();
        }

        this.rect.x = this.x - this.radius;
        this.rect.y = this.y - this.radius;
    }
    reflectX() {
        this.speed_x = -this.speed_x;
    }
    reflectY() {
        this.speed_y = -this.speed_y;
    }
    deflectLeft() {
        this.speed_x -= player.speed;
    }
    deflectRight() {
        this.speed_x += player.speed;
    }
    nudgeLeft() {
        this.speed_x = -0.3 * Math.abs(this.speed_y);
    }
    nudgeRight() {
        this.speed_x = 0.3 * Math.abs(this.speed_y);
    }
    setHorizontalVelocity(velocity) {
        this.speed_x = velocity;
    }
    collide(direction) {
        console.log(direction);
        if(direction == 1 || direction == 3) {
            this.reflectY();
        }
        else if(direction == 2) {
            this.deflectLeft()
        }
        else if(direction == 4) {
            this.deflectRight();
        }
        else if(direction == 6) {
            this.nudgeLeft();
            this.reflectY();
        }
        else if(direction == 7) {
            this.nudgeRight();
            this.reflectY();
        }
    }
    render() {
        context.fillStyle = "#ff0000";
        _fillCircle(this.x, this.y, this.radius, context);
    }
    setSpeed() {
        this.speed_x = 0;
        this.speed_y = 5;
    }
    setRect() {
        this.rect = {
            x: this.x - this.radius,
            y: this.y - this.radius,
            width: 2 * this.radius,
            height: 2 * this.radius
        }
    }
    respawn() {
        this.x = canvas_width / 2;
        this.y = canvas_height / 2;

        this.setRect();
        this.setSpeed();
    }
}