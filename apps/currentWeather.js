// Config Options
const weatherDiv = document.getElementById("pos-topRight");
const tempUnit = "C"; // C or F
const weatherApiKey = "fba8cef2c152d45d1cd464705864cb5f";
const cityId = "5391832"; // refer to city.list.json, to find your city ID

//Actual code
var weatherIcon = document.createElement("img");
var city, temp, pressure, humidity, temp_min, hhh, temp_max, bbb;


update();


function update() {
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?id=" + cityId + "&appid=" + weatherApiKey, function (data) {
        console.dir(data);
        bbb = data;
        hhh = data["weather"][0]["icon"];
        weatherIcon.src = "apps/currentWeather/" + hhh + ".png";
        temp = kToUnit(data["main"]["temp"]);
        pressure = data["main"]["pressure"];
        humidity = data["main"]["humidity"];
        temp_max = kToUnit(data["main"]["temp_max"]);
        temp_min = kToUnit(data["main"]["temp_min"]);
        city = data["name"];
        weatherDiv.innerHTML = "";
        ggg = document.createElement("h1");
        ggg.innerHTML = temp + String.fromCharCode(176) + "C <br>humid = " + humidity + "<br> tempMin" + temp_min + "<br> tempMax" + temp_max + "<br>" +city;
        weatherDiv.appendChild(ggg);
        weatherDiv.appendChild(weatherIcon);
    });
    // display the results 

    setTimeout(arguments.callee, 1200000); // Loop every 20 minutes
}





function kToUnit(k) {
    return (tempUnit === "C" ? Math.round((k - 273.15) * 100) / 100 : (tempUnit === "F" ? Math.round((((k - 273.15) * 9 / 5) + 32) * 100) / 100 : 'Wrong Unit'));
}
