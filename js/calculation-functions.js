
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
