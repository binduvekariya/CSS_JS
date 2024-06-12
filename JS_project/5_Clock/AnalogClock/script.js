const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");

function clocktime() {

    // get the hour, minute and second
    let time = new Date();
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();

    let hRotate = 30*h + m/2;
    let mRotate = 6 * m;
    let sRotate = 6 * s;

    hour.style.transform = `rotate(${hRotate}deg)`;
    minute.style.transform = `rotate(${mRotate}deg)`;
    second.style.transform = `rotate(${sRotate}deg)`;
} 

setInterval(clocktime, 1000);