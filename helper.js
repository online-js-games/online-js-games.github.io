function _getElement(element) {
    return document.getElementById(element);
}

function _getDistance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

function _fillRect(rect, rendering_context) {
    rendering_context.fillRect(rect.x, rect.y, rect.width, rect.height);
}