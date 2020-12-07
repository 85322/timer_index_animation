function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = seconds;

        if (--timer < 0) {
			timer = duration;
            document.getElementById("li1").innerHTML = "rdy";
        } 
    }, 1000);
}


function timer() {
    let Minutes = 60 * 0.05,
        display = document.getElementById("li1");
    startTimer(Minutes, display);
};

/*
function clickCounter(){
    document.getElementById("li1").innerHTML = "5";
}

*/




 document.getElementById("button1").onclick = function(){
    timer();
 }
