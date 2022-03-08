const time = document.getElementById('time');
const timeSeconds = document.getElementById('seconds');
const clockColumn = clock.querySelector('.clock__column')
const ampm = clockColumn.querySelector('span')


const today = new Date();
let todayYear = today.getFullYear();
let todayMonth = today.getMonth();
let todayDate = today.getDate();
let todayDay = today.getDay();

function intervalSeconds(){
    let today = new Date();
    let hours = String(today.getHours()).padStart(2,0);
    let minutes = String(today.getMinutes()).padStart(2,0);
    let seconds = String(today.getSeconds()).padStart(2,0);
    time.innerText = `${hours} : ${minutes}`;
    timeSeconds.innerText = `${seconds}`;
    if(hours >= 12){
        ampm.innerText = `pm`;
    }else{
        ampm.innerText = 'am';
    }
}

intervalSeconds();
setInterval(intervalSeconds,1000);