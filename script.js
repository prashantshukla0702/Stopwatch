var startbtn = document.getElementById('startbtn'); // start button element
var stopbtn = document.getElementById('stopbtn'); // stop button element
var resetbtn = document.getElementById('resetbtn'); // reset button element
var minValue = document.getElementById('min'); // element to show minute value
var secValue = document.getElementById('sec'); // element to show second value
var millisecValue = document.getElementById('millisec'); // element to show millisecond value
var interval; // to store the running interval value

var min = 0;
var sec = 0;
var millisec = 0;

startbtn.addEventListener('click', () => {
    clearInterval(interval); // to stop the previous execution of interval if button is clicked multiple time.
    interval = setInterval(() => {
        millisec += 1;
        if (millisec < 9) {
            millisecValue.innerHTML = '0' + millisec; // adding the value of millisecond into the dom
        }
        if (millisec > 9) {
            millisecValue.innerHTML = millisec; // adding the value of millisecond into the dom
        }
        if (millisec >= 100) {
            sec += 1;
            if (sec <= 9) {
                secValue.innerHTML = '0' + sec;
            } else {
                secValue.innerHTML = sec;
            }
            if (sec >= 60) {
                min += 1;  // Increase the count of minutes after completing 60 seconds.
                sec = 0; // reset seconds to 0.
                if (min <= 9) {
                    minValue.innerHTML = '0' + min;
                    secValue.innerHTML = '0' + sec;
                } else {
                    minValue.innerHTML = min;
                    secValue.innerHTML = '0' + sec;
                }

            }
            millisec = 00;
            millisecValue.innerHTML = millisec;
        }

    }, 10);
});

stopbtn.addEventListener('click', () => {
    clearInterval(interval); // stop the execution of current interval.
});

resetbtn.addEventListener('click', () => {
    clearInterval(interval); // Stop the execution of the current interval.
    min = 0;
    sec = 0;
    millisec = 0;
    millisecValue.innerHTML = '0' + millisec; //  reset the value of millisecond to 0.
    secValue.innerHTML = '0' + sec; // reset the value of Second to 0.
    minValue.innerHTML = '0' + min; //  reset the value of minutes to 0.


});