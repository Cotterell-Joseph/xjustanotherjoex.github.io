var cDate = new Date();
var day;
var month;
var numDay = cDate.getDate();
var year = cDate.getFullYear();
var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var calMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
day = weekday[cDate.getDay()];
month = calMonth[cDate.getMonth()];
cDate = day + ", " + numDay + " " + month + " " + year;
document.getElementById("currentdate").innerHTML = cDate;