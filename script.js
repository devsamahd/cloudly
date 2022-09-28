/**
 * Weather App
 * TODO: Complete getWeatherData() to return json response Promise
 * TODO: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the the html file from response
 */

/* DIV ID's you'll need access to 👇
"city-name"
"weather-type"
"temp"
"min-temp"
"max-temp"
*/

// API_KEY for maps api

/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this: 
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */
const Text = (id, goto) => {
  document.getElementById(id).innerText = goto
}

getWeatherData = (city) => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '977c02944amsh1f7e9a998a71dcfp104073jsn8c7906a0feef',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  };
  
  return fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`, options)
    .then(response => response.json())
    .then(response =>  response)
    .catch(err => err);
  //CODE GOES HERE
}
/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
const searchCity = async() => {
  const city = document.getElementById('city-input').value;
  // CODE GOES HERE
  const data = await getWeatherData(city)
  showWeatherData(data)
  }





/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
const showWeatherData = ({current, location}) => {
  //CODE GOES HERE
 try{
  location = `${location.name}, ${location.country}`
 temp = current.temp_c 
  Text("weather-type",current.condition.text) 
  Text("city-name",location) 
  Text("temp",temp) 
  Text("humidity",current.humidity) 
  Text("wind",current.wind_kph) 
 } catch(err){
  console.log("This is the error:",err)
 }
}

// Randoms
// const showWeatherData = ({current, location}) => {
//   //CODE GOES HERE
//  try{
//   location = `${location.name}, ${location.country}`
//  temp = current.temp_c 
//   Text("weather-type",current.condition.text) 
//   Text("city-name",location) 
//   Text("temp",temp) 
//   Text("humidity",current.humidity) 
//   Text("wind",current.wind_kph) 
//  } catch(err){
//   console.log("This is the error:",err)
//  }
// }


