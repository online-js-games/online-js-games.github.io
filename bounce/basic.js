// critial parameters
let screen_width, screen_height;
let canvas_width, canvas_height;
let fps = 24, paused = false;
let accelerated = true;
let on_mobile;

// declare elements here
let canvas = _getElement("canvas");
let context = canvas.getContext("2d");

// decide canvas dimensions here (desktop)
function initDesktopCanvas() {
    getScreenParams();
    canvas_height = 0.9 * screen_height;
    canvas_width = canvas_height * 1.618;
    resizeCanvas();
}

// decice canvas dimensions here (mobile)
function initMobileCanvas() {
    getScreenParams();
    console.log(screen_width, screen_height);
    if(screen_height > screen_width) {
        canvas_width = 0.95 * screen_width;
        canvas_height = canvas_width / 1.618;
        alert("Please reload this game in landscape mode for a better experience!");
    }
    else {
        canvas_height = 0.95 * screen_height;
        canvas_width = 0.8 * screen_width;
    }
    resizeCanvas();
}

// determine device
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    on_mobile = true;
    initMobileCanvas();
} else {
    on_mobile = false;
    initDesktopCanvas();
}

// loop function
let animate;
if (accelerated) {
    animate = window.requestAnimationFrame
        || window.webkitRequestAnimationFrame
        || window.mozRequestAnimationFrame
        || function (callback) {
            window.setTimeout(callback, 1000 / fps);
        };
}
else {
    animate = function (callback) {
        window.setTimeout(callback, 1000 / fps);
    }
}

// recursive function
function step() {
    if (!paused) {
        update();
    }
    render();
    animate(step);
}

// initialiser
window.onload = function () {
    initParams();
    animate(step);
}

// mouse event params
let click_x, click_y, pressed;

// mobile events
if (on_mobile) {
    canvas.addEventListener("touchstart", function (e) {
        getTouchPosition(canvas, e);
        let touch = e.touches[0];
        let mouseEvent = new MouseEvent("mousedown", {
            clientX: touch.clientX,
            clientY: touch.clientY
        });
        canvas.dispatchEvent(mouseEvent);
        pressed = true;
        clicked();
    }, false);

    canvas.addEventListener("touchmove", function (e) {
        getTouchPosition(canvas, e);
        let touch = e.touches[0];
        let mouseEvent = new MouseEvent("mousemove", {
            clientX: touch.clientX,
            clientY: touch.clientY
        });
        canvas.dispatchEvent(mouseEvent);
        moved();
    }, false);

    canvas.addEventListener("touchend", function (e) {
        getTouchPosition(canvas, e);
        let touch = e.touches[0];
        let mouseEvent = new MouseEvent("mouseup", {
            clientX: touch.clientX,
            clientY: touch.clientY
        });
        canvas.dispatchEvent(mouseEvent);
        pressed = false;
        released();
    }, false);

    window.onorientationchange = function() {
        console.log("Orientation changed!");
        initMobileCanvas();
    }
}
// desktop events
else {
    canvas.addEventListener("mousedown", function (e) {
        getMousePosition(canvas, e);
        pressed = true;
        clicked();
    });

    canvas.addEventListener("mousemove", function (e) {
        getMousePosition(canvas, e);
        moved();
    });

    canvas.addEventListener("mouseup", function (e) {
        getMousePosition(canvas, e);
        pressed = false;
        released();
    });

    window.addEventListener("keydown", function (e) {
        // disable scrolling due to arrow keys and space bar
        if (e.key == "ArrowDown" || e.key == "ArrowUp" || e.key == " ") {
            e.preventDefault();
        }
        keyPressed(e.key);
    }, false);

    window.addEventListener("keyup", function (e) {
        keyReleased(e.key);
    }, false);
}

function getMousePosition(canvas, event) {
    rect = canvas.getBoundingClientRect();
    click_x = event.clientX - rect.left;
    click_y = event.clientY - rect.top;
}

function getTouchPosition(canvas, event) {
    var rect = canvas.getBoundingClientRect();
    click_x = event.touches[0].clientX - rect.left;
    click_y = event.touches[0].clientY - rect.top;
}

function getScreenParams() {
    screen_width = window.innerWidth;
    screen_height = window.innerHeight;
}

function resizeCanvas() {
    canvas.width = canvas_width;
    canvas.height = canvas_height;
}



