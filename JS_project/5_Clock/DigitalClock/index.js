const clockid = document.getElementById("clock");

function showTime() {

    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();

    let session = "AM";

    if(hour == 0) {
        hour = 12;
    }

    if(hour > 12)
    {
        hour = hour - 12;
        session = "PM";
    } 

    hour = (hour < 10) ? "0" + hour : hour;
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;


    let answer = hour + ":" + min + ":" + sec + " " + session;

    clockid.innerHTML= answer;


    setTimeout(showTime);

}

showTime();

clockid.addEventListener("load", showTime);  
