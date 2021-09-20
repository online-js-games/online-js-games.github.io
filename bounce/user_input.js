let left_press, right_press;

function clicked() {
    if(click_x < canvas_width / 2) {
        left_press = true;
        right_press = false;
    }
    if (click_x > canvas_width / 2) {
        right_press = true;
        left_press = false;
    }
}

function moved() {
    if(pressed) {
        if(click_x < canvas_width / 2) {
            left_press = true;
            right_press = false;
        }
        if (click_x > canvas_width / 2) {
            right_press = true;
            left_press = false;
        }
    }
}

function released() {
    left_press = false;
    right_press = false;
}

function keyPressed(key) {
    if(key == "ArrowLeft" || key == "a" || key == "A") {
        left_press = true;
    }
    if(key == "ArrowRight" || key == "d" || key == "D") {
        right_press = true;
    }
    if(key == "p") {
        pauseToggle();
    }
}

function keyReleased(key) {
    if(key == "ArrowLeft" || key == "a" || key == "A") {
        left_press = false;
        player.moving_left = false;
    }
    if(key == "ArrowRight" || key == "d" || key == "D") {
        right_press = false;
        player.moving_right = false;
    }
}