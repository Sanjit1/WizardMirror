// Config Options
const weatherDiv = document.getElementById("pos-topRight");
const tempUnit = "C"; // C or F
const weatherApiKey = "fba8cef2c152d45d1cd464705864cb5f";
const cityId = "5391832"; // refer to city.list.json, to find your city ID

//Actual code
var weatherIcon = document.createElement("img");
var city, temp, pressure, humidity, temp_min, icon, temp_max;


update();


function update() {
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?id=" + cityId + "&appid=" + weatherApiKey, function (data) {
        // console.dir(data);
        icon = data["weather"][0]["icon"];
        temp = kToUnit(data["main"]["temp"]);
        pressure = data["main"]["pressure"];
        humidity = data["main"]["humidity"];
        temp_max = kToUnit(data["main"]["temp_max"]);
        temp_min = kToUnit(data["main"]["temp_min"]);
        city = data["name"];

        weatherDiv.innerHTML = "";
        var icoHiLoCurDiv = document.createElement('div'); icoHiLoCurDiv.id = 'icoHiLoCurDiv';
        var iconAndHiLoDiv = document.createElement('div'); iconAndHiLoDiv.id = 'iconAndHiLoDiv';
        var minAndMaxDiv = document.createElement('div'); minAndMaxDiv.id = 'minAndMaxDiv';
        var minText = document.createElement('h1');  minText.id = 'minText'; minText.appendChild(document.createTextNode(temp_min));
        var maxText = document.createElement('h1'); maxText.id = 'maxText'; maxText.appendChild(document.createTextNode(temp_max));
        minAndMaxDiv.appendChild(minText); minAndMaxDiv.appendChild(maxText); 
        weatherIcon.src = "apps/currentWeather/" + icon + ".png";
        var tempText = document.createElement('h1'); tempText.id = 'tempText'; tempText.appendChild(document.createTextNode(temp + String.fromCharCode(176) + "C"));
        iconAndHiLoDiv.appendChild(weatherIcon);  
        iconAndHiLoDiv.appendChild(minAndMaxDiv);      
        icoHiLoCurDiv.appendChild(iconAndHiLoDiv);
        icoHiLoCurDiv.appendChild(tempText);
        weatherDiv.appendChild(icoHiLoCurDiv);
        
    });
    // display the results 

    setTimeout(arguments.callee, 1200000); // Loop every 20 minutes
}





function kToUnit(k) {
    return parseInt((tempUnit === "C" ? Math.round(k - 273.15) : (tempUnit === "F" ? Math.round(((k - 273.15) * 9 / 5) + 32) : 'Wrong Unit')));
}