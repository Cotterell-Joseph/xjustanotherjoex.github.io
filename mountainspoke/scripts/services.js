var output = document.querySelector('tbody');
var requestURL = 'https://xjustanotherjoex.github.io/mountainspoke/data/services.json';
var request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    var jsondata = request.response;
    var services = jsondata['services'];
    for (var i = 0; i < services.length; i++) {
        var row = document.createElement('tr');
        var service = document.createElement('td');
        var time = document.createElement('td');
        var cost = document.createElement('td');
        service.textContent = services[i].name;
        time.textContent = services[i].estimatedTime;
        cost.textContent = '$' + services[i].cost;
        row.appendChild(service);
        row.appendChild(time);
        row.appendChild(cost);
        output.appendChild(row);
    }
}