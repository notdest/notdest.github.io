
const G = 9.807;

function toRadians(angle) {
    return angle * Math.PI/180;
}


// Вычисляет для скорости м/с высоту подъёма в метрах
function speedToHeight(speed) {
    return (speed**2)/(2*G);
}

// Добавить скорость при спуске с высоты (или вычесть, при отрицательном спуске)
function addHeight(speed, height){
    return Math.sqrt(speed**2 + 2*G*height);
}

// Переводим скорость из м/с в км/ч
function toKMH(speed){
    return speed*3.6;
}

function round(num, precision){
    let multiplier = 10 ** precision;
    return Math.round( num * multiplier)/multiplier;
}

function vectorLength(a, b) {
    return Math.sqrt(a**2 + b**2);
}
