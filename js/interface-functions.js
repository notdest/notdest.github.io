

function input(name) {
    return Number(document.getElementById(name).value);
}

function output(name, value, suffix) {
    document.getElementById(name).innerText = value.toFixed(1) + " " + suffix;
}

function outputRange(name, min, max, suffix) {
    document.getElementById(name).innerText = min.toFixed(1) + "–" + max.toFixed(1) + " " + suffix;
}
