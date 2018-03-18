    var output1 = document.querySelector('#cardGreenville');
      var requestURL1 = 'https://byui-cit230.github.io/weather/data/towndata.json';
      var request1 = new XMLHttpRequest();
      request1.open("GET", requestURL);
      request1.responseType = 'json';
      request1.send();

      request1.onload = function() {
          var jsondata = request.response;
          var cities = jsondata['towns'];
          for (var i = 1; i < 2; i++) {
		      var city = document.createElement('h3');
		      city.textContent = cities[i].name + ' City';
              var motto = document.createElement('p');
              var yearFounded = document.createElement('p');
              var currentPopulation = document.createElement('p');
              var averageRainfall = document.createElement('p');
              motto.textContent = '"' + cities[i].motto + '"';
              yearFounded.textContent = 'Year Founded: ' + cities[i].yearFounded;
              currentPopulation.textContent = 'Current Population: ' + cities[i].currentPopulation;
              averageRainfall.textContent = 'Annual Rainfall: ' + cities[i].averageRainfall;
		      output1.appendChild(city);
		      output1.appendChild(motto);
              output1.appendChild(yearFounded);
              output1.appendChild(currentPopulation);
              output1.appendChild(averageRainfall);
          }
      }