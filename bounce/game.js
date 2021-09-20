let player;

function update() {
    if(left_press) {
        player.moveLeft();
    }
    if(right_press) {
        player.moveRight();
    }
}

function render() {
    context.fillStyle = "#000000";
    context.fillRect(0, 0, canvas_width, canvas_height);

    player.render();
}

function updateParams(variable) {

}

function initParams() {
    let paddle_width_factor = 7;
    let paddle_height_factor = 15;
    let padding_factor = 30;
    let speed_factor = 5 * fps;

    let paddle_width = canvas_width / paddle_width_factor;
    let paddle_height = canvas_height / paddle_height_factor;
    let padding = canvas_height / padding_factor;
    let speed = canvas_width / speed_factor;

    player = new Paddle((canvas_width - paddle_width) / 2, canvas_height - padding - paddle_height, paddle_width, paddle_height, speed);
}

