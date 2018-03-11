let upper = parseFloat(document.getElementById("hightemp").innerHTML);
let lower = parseFloat(document.getElementById("lowtemp").innerHTML);
let speed = parseFloat(document.getElementById("windspeed").innerHTML);
let t = (upper + lower) / 2;
let s = Math.pow(speed, 0.16);

f = 35.74 + (0.6215 * t) - (35.75 * s) + (0.4275 * t * s);
f = Math.round(f);
document.getElementById("windchill").innerHTML = f + "&deg;F";