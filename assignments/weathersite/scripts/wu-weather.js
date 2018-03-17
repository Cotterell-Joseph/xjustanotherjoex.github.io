var currentURL = 'https://api.wunderground.com/api/7fe14c548b6797eb/conditions/q/MN/Franklin.json';
var requestCurr = new XMLHttpRequest();
requestCurr.open('GET', currentURL, true);
requestCurr.send();

requestCurr.onload = function() {
    var franklinCurr = JSON.parse(requestCurr.responseText);
    console.log(franklinCurr);
    document.getElementById('desc').innerHTML = franklinCurr.current_observation.weather;
    document.getElementById('temp').innerHTML = franklinCurr.current_observation.temp_f;
    document.getElementById('wind').innerHTML = franklinCurr.current_observation.wind_mph;
    var iconURL = franklinCurr.current_observation.icon_url;
    iconURL = iconURL.replace('http:', 'https:');
    document.getElementById('w_icon').src = iconURL;
}

var forecastURL = 'https://api.wunderground.com/api/7fe14c548b6797eb/forecast/q/MN/Franklin.json';
var requestFore = new XMLHttpRequest();
requestFore.open('GET', forecastURL, true);
requestFore.send();

requestFore.onload = function() {
    var franklinFore = JSON.parse(requestFore.responseText);
    console.log(franklinFore);
    document.getElementById('foreCurr').innerHTML = franklinFore.forecast.txt_forecast.forecastday["0"].fcttext;
}