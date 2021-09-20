let two_pi = 2 * Math.PI;

function _rectsCollideDir(small_rect, big_rect) {
    let top_left = false, top_right = false, bottom_left = false, bottom_right = false;
    if(_insideRect(small_rect.x, small_rect.y, big_rect)) {
        top_left = true;
    }
    if(_insideRect(small_rect.x + small_rect.width, small_rect.y, big_rect)) {
        top_right = true;
    }
    if(_insideRect(small_rect.x + small_rect.width, small_rect.y + small_rect.height, big_rect)) {
        bottom_right = true;
    }
    if(_insideRect(small_rect.x, small_rect.y + small_rect.height, big_rect)) {
        bottom_left = true;
    }
    console.log(top_left, top_right, bottom_left, bottom_right);
    if(!(top_left || top_right || bottom_left || bottom_right)) {
        return 0;
    }
    else if(top_left && top_right && bottom_left && bottom_right) {
        return 9;
    }
    else if(top_left && top_right) {
        // up
        return 1;
    }
    else if(top_right && bottom_right) {
        // right
        return 2;
    }
    else if(bottom_left && bottom_right) {
        // down
        return 3;
    }
    else if(top_left && bottom_left) {
        // left
        return 4;
    }
    else if(top_right) {
        // NE
        return 5;
    }
    else if(bottom_right) {
        // SE
        return 6;
    }
    else if(bottom_left) {
        // SW
        return 7;
    }
    else if(top_left) {
        // NW
        return 8;
    }
}

function _rectsCollide(small_rect, big_rect) {
    if(_insideRect(small_rect.x, small_rect.y, big_rect)) {
        return true;
    }
    else if(_insideRect(small_rect.x + small_rect.width, small_rect.y, big_rect)) {
        return true;
    }
    else if(_insideRect(small_rect.x + small_rect.width, small_rect.y + small_rect.height, big_rect)) {
        return true;
    }
    else if(_insideRect(small_rect.x, small_rect.y + small_rect.height, big_rect)) {
        return true;
    }
    else {
        return false;
    }
}

function _insideRect(x, y, rect) {
    return (rect.x < x && x < rect.x + rect.width && rect.y < y && y < rect.y + rect.height);
}

function _getElement(element) {
    return document.getElementById(element);
}

function _getDistance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

function _fillRect(rect, rendering_context) {
    rendering_context.fillRect(rect.x, rect.y, rect.width, rect.height);
}

function _strokeRect(rect, rendering_context) {
    rendering_context.strokeRect(rect.x, rect.y, rect.width, rect.height);
}

function _fillCircle(x, y, radius, rendering_context) {
    rendering_context.beginPath();
    rendering_context.arc(x, y, radius, 0, two_pi, false);
    rendering_context.fill();
}

function _strokeCircle(x, y, radius, rendering_context) {
    rendering_context.beginPath();
    rendering_context.arc(x, y, radius, 0, two_pi, false);
    rendering_context.stroke();
}