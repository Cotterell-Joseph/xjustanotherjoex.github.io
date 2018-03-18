var currentURL1 = 'https://api.wunderground.com/api/7fe14c548b6797eb/conditions/q/CA/San_Francisco.json';
var requestCurr1 = new XMLHttpRequest();
requestCurr1.open('GET', currentURL1, true);
requestCurr1.send();

requestCurr1.onload = function() {
    var franklinCurr1 = JSON.parse(requestCurr1.responseText);
    console.log(franklinCurr1);
    document.getElementById('desc').innerHTML = franklinCurr1.current_observation.weather;
    document.getElementById('temp').innerHTML = franklinCurr1.current_observation.temp_f;
    document.getElementById('wind').innerHTML = franklinCurr1.current_observation.wind_mph;
    var iconURL1 = franklinCurr1.current_observation.icon_url;
    iconURL1 = iconURL1.replace('http:', 'https:');
    document.getElementById('w_icon').src = iconURL1;
}

var forecastURL1 = 'https://api.wunderground.com/api/7fe14c548b6797eb/forecast/q/CA/San_Francisco.json';
var requestFore1 = new XMLHttpRequest();
requestFore1.open('GET', forecastURL1, true);
requestFore1.send();

requestFore1.onload = function() {
    var franklinFore1 = JSON.parse(requestFore1.responseText);
    console.log(franklinFore1);
    document.getElementById('foreCurr').innerHTML = franklinFore1.forecast.txt_forecast.forecastday["0"].fcttext;
}