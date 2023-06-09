const yearsEl = document.getElementById("years")
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const pastYears = "2014-04-15T19:00:00+03:00";

function countdown() {
    const pastYearsDate = new Date(pastYears);
    const currentDate = new Date();

    const totalSeconds = ( currentDate - pastYearsDate) / 1000;
    const years = Math.floor(totalSeconds/60 / 60 / 24 /365) ;
    const days = Math.floor(totalSeconds / 3600 / 24 %365 );
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    yearsEl.innerHTML=years;
    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// initial call
countdown();

setInterval(countdown, 1000);



