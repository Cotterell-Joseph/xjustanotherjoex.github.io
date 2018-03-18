var currentURL2 = 'https://api.wunderground.com/api/7fe14c548b6797eb/conditions/q/TX/Houston.json';
var requestCurr2 = new XMLHttpRequest();
requestCurr2.open('GET', currentURL2, true);
requestCurr2.send();

requestCurr2.onload = function() {
    var franklinCurr2 = JSON.parse(requestCurr2.responseText);
    console.log(franklinCurr2);
    document.getElementById('desc').innerHTML = franklinCurr2.current_observation.weather;
    document.getElementById('temp').innerHTML = franklinCurr2.current_observation.temp_f;
    document.getElementById('wind').innerHTML = franklinCurr2.current_observation.wind_mph;
    var iconURL2 = franklinCurr2.current_observation.icon_url;
    iconURL2 = iconURL2.replace('http:', 'https:');
    document.getElementById('w_icon').src = iconURL2;
}

var forecastURL2 = 'https://api.wunderground.com/api/7fe14c548b6797eb/forecast/q/TX/Houston.json';
var requestFore2 = new XMLHttpRequest();
requestFore2.open('GET', forecastURL2, true);
requestFore2.send();

requestFore2.onload = function() {
    var franklinFore2 = JSON.parse(requestFore2.responseText);
    console.log(franklinFore2);
    document.getElementById('foreCurr').innerHTML = franklinFore2.forecast.txt_forecast.forecastday["0"].fcttext;
}