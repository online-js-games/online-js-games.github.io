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
    if(key == "ArrowLeft") {
        left_press = true;
    }
    if(key == "ArrowRight") {
        right_press = true;
    }
}

function keyReleased(key) {
    if(key == "ArrowLeft") {
        left_press = false;
    }
    if(key == "ArrowRight") {
        right_press = false;
    }
}