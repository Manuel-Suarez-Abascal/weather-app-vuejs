<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <div class="home">
      <p>A weather app built Vuejs & Open Weather App. Made by Manuel Abascal</p>

      <!-- Input field value -->
      <label>Enter Canadian City: </label> 
      <input type="text" v-model.lazy="currentCity" @change="getWeather">

      <!-- Forecast stat values -->
      <div class="forecast" v-if="currentWeather && currentWeather.cod == 200">
        <div><strong>City:</strong> {{ currentWeather.name }}</div>
        <div><strong>Longitude: </strong> {{ currentWeather.coord.lon }}</div>
        <div><strong>Latitude: </strong> {{ currentWeather.coord.lat }}</div>
        <div><strong>Weather condition </strong> {{ currentWeather.weather[0].description }}</div>
        <div><strong>Temperature </strong> {{ currentWeather.main.temp }} °C</div>
        <div><strong>Humidity: </strong> {{ currentWeather.main.humidity }}%.</div>
        <div><strong>Wind: </strong> {{ currentWeather.wind.speed }} km/h</div>
      </div>
      <div v-else>
        "{{ currentCity }}" is not found
      </div>
    </div>
  </div>
</template>

<script>
// import Axios
import axios from "axios"

export default {
  name: "Home",
  props: {
    msg: String,
  },
  data(){
    return {
      // current weather
      currentWeather: null,
      // current city
      currentCity: 'Montreal',
      // current country
      currentCountry: 'ca',
      unit: 'metric'
    }
    this.$set(this.currentCity);
  },
  methods: {
    getWeather(){
      // Make axios request to open weather api
      axios.get('https://api.openweathermap.org/data/2.5/weather?q=' + this.currentCity+ ',' +this.currentCountry + '&appid=fe435501a7f0d2f2172ccf5f139248f7&units=' + this.unit + '')
      .then((response) => {
          // takes response object & stores it in currentWeather
          this.currentWeather = response.data

      })
      .catch(function (error) {
          // handle error
          console.log(error);
      })
    },
  },
  mounted() {
    // Calls Weather API response in load
    this.getWeather();
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