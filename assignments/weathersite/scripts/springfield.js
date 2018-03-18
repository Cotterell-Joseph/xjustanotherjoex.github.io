    var output2 = document.querySelector('#cardSpringfield');
      var requestURL2 = 'https://byui-cit230.github.io/weather/data/towndata.json';
      var request2 = new XMLHttpRequest();
      request2.open("GET", requestURL);
      request2.responseType = 'json';
      request2.send();

      request2.onload = function() {
          var jsondata = request.response;
          var cities = jsondata['towns'];
          for (var i = 3; i < 4; i++) {
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
		      output2.appendChild(city);
		      output2.appendChild(motto);
              output2.appendChild(yearFounded);
              output2.appendChild(currentPopulation);
              output2.appendChild(averageRainfall);
          }
      }