const request = superagent;

var states = document.querySelector('.countries-container')

request

.get('https://restcountries.eu/rest/v2/all')
.then(function saveStatesInAVariable(data) {
      const states = data.body

      console.log(states);

      return states
    })
    .then(function printInWebpage(statesList) {
          statesList.forEach(function(obj) {
            states.innerHTML += `<div class="country-card">
              <img class="country-flag" src="${obj.flag}"  alt="flag"></img>
              <h4 class="country-name">${obj.name}</h4>
              <p class="country-capital"> ${obj.capital}City</p>
            </div>`
          })
        })
