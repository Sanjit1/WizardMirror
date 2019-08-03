// Config options
const timeDiv = document.getElementById("pos-topLeft");
const showSeconds = true;
const twentyFourHourClock = false;

// Actual Code
var date = new Date();
var dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var day = dayList[date.getDay()];
var monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var month = monthList[date.getMonth()];
var year = date.getFullYear();
var dateNumb = date.getDate();
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();
var dateWrite = day + ', ' + month + ' ' + dateNumb + ', ' + year;
var timeWrite = hours + ":" + minutes;

var timeText = document.createElement("h1");
timeDiv.appendChild(timeText);
var dateText = document.createElement("h1");
timeDiv.appendChild(dateText);


update();

function update() {
    date = new Date();
    dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    day = dayList[date.getDay()];
    monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    month = monthList[date.getMonth()];
    year = date.getFullYear();
    dateNumb = date.getDate();
    hours = (twentyFourHourClock? date.getHours():(date.getHours()>12?date.getHours()-12:(date.getHours()===0?12:date.getHours())));
    minutes = date.getMinutes();
    seconds = date.getSeconds();
    var timeString = hours+":"+(minutes>9?minutes:"0"+minutes)+(showSeconds?":"+(seconds>9?seconds:"0"+seconds):"")+(twentyFourHourClock?"":(date.getHours()>11?"PM":"AM"));
    timeText.innerHTML = "";
    timeText.appendChild(document.createTextNode(timeString));
    var dateString = day+", " + month + " " + dateNumb+"<sup>"+(dateNumb===1?"st":(dateNumb===2)?"nd":(dateNumb===3)?"rd":"th")+"</sup>, "+ year;
    dateText.innerHTML = "";
    dateText.innerHTML = dateString;
    setTimeout(arguments.callee, 10); // Loop every 10 milliseconds
}


