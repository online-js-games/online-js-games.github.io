let player;
let ball;

function update() {
    player.moving_left = false;
    player.moving_right = false;
    
    if(left_press) {
        player.moveLeft();
    }
    if(right_press) {
        player.moveRight();
    }

    let dir = _rectsCollideDir(ball.rect, player.rect);
    if(dir == 1 || dir == 3) {
        ball.collide(dir);
        if(player.moving_left) {
            ball.setHorizontalVelocity(-player.speed);
        }
        if(player.moving_right) {
            ball.setHorizontalVelocity(player.speed);
        }
    }

    ball.update();

    console.log(player.moving_left, player.moving_right);
}

function render() {
    context.fillStyle = "#000000";
    context.fillRect(0, 0, canvas_width, canvas_height);

    player.render();
    ball.render();
}

function updateParams(variable) {

}

function initParams() {
    let paddle_width_factor = 7;
    let paddle_height_factor = 15;
    let paddle_speed_factor = 5 * fps;
    let padding_factor = 30;

    let ball_radius_factor = 100;

    let paddle_width = canvas_width / paddle_width_factor;
    let paddle_height = canvas_height / paddle_height_factor;
    let paddle_speed = canvas_width / paddle_speed_factor;
    let padding = canvas_height / padding_factor;

    let ball_radius = canvas_width / ball_radius_factor;

    player = new Paddle((canvas_width - paddle_width) / 2, canvas_height - padding - paddle_height, paddle_width, paddle_height, paddle_speed);
    ball = new Ball(canvas_width / 2, canvas_height / 2, ball_radius);

    console.log(player.rect);
    console.log(ball.rect);
}

