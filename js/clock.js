const time = document.getElementById('time');
const timeSeconds = document.getElementById('seconds');
const clockColumn = clock.querySelector('.clock__column')
const daytime = clockColumn.querySelector('span')
const date = document.getElementById('date');

const dayOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
const monthOfYear = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const today = new Date();
let todayYear = today.getFullYear();
let todayMonth = monthOfYear[today.getMonth()];
let todayDate = today.getDate();
let todayDay = dayOfWeek[today.getDay()];

date.innerText = `${todayYear}.${todayMonth}.${todayDate} (${todayDay})`;



function intervalSeconds(){
    let today = new Date();
    let hours = String(today.getHours()).padStart(2,0);
    let minutes = String(today.getMinutes()).padStart(2,0);
    let seconds = String(today.getSeconds()).padStart(2,0);
    time.innerText = `${hours} : ${minutes}`;
    timeSeconds.innerText = `${seconds}`;
    if(hours >= 12){
        daytime.innerText = `pm`;
    }else{
        daytime.innerText = 'am';
    }
}

intervalSeconds();
setInterval(intervalSeconds,1000);