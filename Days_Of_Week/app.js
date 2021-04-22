let day = document.getElementById('day');
let time = document.getElementById('time');

let date1 = new Date();
let getDay = date1.getDay();

switch(getDay)
{
    case 1:
    getDay = 'Monday';
    break;
    case 2:
    getDay = 'Tuesday';
    break;
    case 3:
    getDay = 'Wednesday';
    break;
    case 4:
    getDay = 'Thursday';
    break;
    case 5:
    getDay = 'Friday';
    break;
    case 6:
    getDay = 'Saturday';
    break;
    case 7:
    getDay = 'Sunday';
    break;
}

day.innerHTML = getDay;
time.innerHTML = date1;