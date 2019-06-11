<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <p>A weather app built Vuejs & Open Weather App. Made by Manuel Abascal</p>
    <div class="forecast">
      <!-- Forecast stat values -->
      <h2>Right now:</h2>
      <div><strong>City:</strong> {{ currentWeather.name }}</div>
      <div><strong>Longitude: </strong> {{ currentWeather.coord.lon }}</div>
      <div><strong>Latitude: </strong> {{ currentWeather.coord.lat }}</div>
      <div><strong>Weather condition </strong> {{ currentWeather.weather[0].description }}</div>
      <div><strong>Temperature Mid: </strong> {{  currentWeather.main.temp }} Farenheit</div>
      <div><strong>Temperature Max: </strong> {{  currentWeather.main.temp_max}} Farenheit</div>
      <div><strong>Temperature Min: </strong> {{  currentWeather.main.temp_min}} Farenheit</div>
      <div><strong>Humidity: </strong> {{  currentWeather.main.humidity }}%</div>
      <div><strong>Wind: </strong> {{  currentWeather.wind.speed }} mph</div>
    </div>
  </div>
</template>

<script>
// import Axios
import axios from "axios"

export default {
  name: "Home",
  props: {
    msg: String
  },
  data(){
    return {
      // current weather
      currentWeather: [],
      // current city
      currentCity: 'Montreal',
      // current country
      currentCountry: 'ca',
      unit: 'imperial'
    }
  },
  created(){
    // Make a request for a user with a given ID
    axios.get('https://api.openweathermap.org/data/2.5/weather?q='+this.currentCity+','+this.currentCountry+'&appid=fe435501a7f0d2f2172ccf5f139248f7&units='+this.unit+'')
    .then((response) => {
        // handle success
        console.log(response.data);
        this.currentWeather = response.data

    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>