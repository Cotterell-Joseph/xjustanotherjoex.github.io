      var output = document.querySelector('#cardFranklin');
      var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
      var request = new XMLHttpRequest();
      request.open("GET", requestURL);
      request.responseType = 'json';
      request.send();

      request.onload = function() {
          var jsondata = request.response;
          var cities = jsondata['towns'];
          for (var i = 0; i < 1; i++) {
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
		      output.appendChild(city);
		      output.appendChild(motto);
              output.appendChild(yearFounded);
              output.appendChild(currentPopulation);
              output.appendChild(averageRainfall);
          }
      }
      
      