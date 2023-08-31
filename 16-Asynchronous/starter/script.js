'use strict'

const btn = document.querySelector('.btn-country')
const countriesContainer = document.querySelector('.countries')

/// ////////////////////////////////////

const renderCountry = (data, className = '') => {
  // COUNTRY PROPERTIES
  const flag = data.flags.svg
  const countryName = data.name.common
  const countryPopulation = data.population
  const language = Object.values(data.languages)[0]
  const currencies = Object.values(data.currencies)[0].name

  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${flag}"/>
      <div class="country__data">
         <h3 class="country__name">${countryName}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${countryPopulation} people</p>
          <p class="country__row"><span>🗣️</span>${language} </p>
          <p class="country__row"><span>💰</span>${currencies}</p>
      </div>
    </article>`

  countriesContainer.insertAdjacentHTML('beforeend', html)
  countriesContainer.style.opacity = 1
}

/**
 *
 * Using XMLHttpRequest to make api calls
 */

// const getCountryAndNeighbor = (country) => {
//   //AJAX  call 1 main country
//   const request = new XMLHttpRequest()
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`)
//   request.send()

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText)
//     console.log(data);

//     // Render country
//     renderCountry(data)

//     // Get neighbor country
//     const neighbors = data.borders
//     if (!neighbors) return

//     neighbors.forEach(neighbor => {
//       let request2 = new XMLHttpRequest()
//       request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbor}`)
//       request2.send()

//       request2.addEventListener('load', function () {
//         // console.log(this.responseText);
//         const [data2] = JSON.parse(this.responseText)
//         console.log(data2);
//         renderCountry(data2, 'neighbor')
//       });

//     })
//   })
// }
// getCountryAndNeighbor('cameroon')


const getCountryData = (country) => {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((response) => response.json())
    .then((data) => renderCountry(data[0]))
}

getCountryData('cameroon')
