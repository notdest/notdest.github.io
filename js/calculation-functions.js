
var G = 9.807;

function toRadians(angle) {
    return angle * Math.PI/180;
}


// Вычисляет для скорости м/с высоту подъёма в метрах
function speedToHeight(speed) {
    return (speed**2)/(2*G);
}

