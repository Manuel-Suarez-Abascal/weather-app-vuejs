<template>
  <div class="home container">
    <h1>{{ msg }}</h1>
    <div class="home app-title my-3">
      <p class="m-2">A weather app built <a class="vuejs-link text-decoration-none" href="https://vuejs.org/" target="_blank" rel="noopener">Vuejs</a> & <a class="open-weather-api-link text-decoration-none" href="https://openweathermap.org/" target="_blank" rel="noopener">Open Weather App.</a></p>

      <p class="m-2">Made with &#10084;&#65039; by <a class="github-profile-link color-info text-decoration-none" href="https://github.com/Manuel-Suarez-Abascal" target="_blank" rel="noopener">Manuel Abascal</a></p>

      <!-- Input field value -->
      <b-row class="justify-content-center mt-4">
        <b-col col xl="3" lg="3" md="4" sm="12" cols="12">
          <b-form-input value="" aria-label="Input to select city" type="text" v-model.lazy="currentCity" @change="getWeather" placeholder="Enter a valid city"></b-form-input>
        </b-col>
      </b-row>

      <!-- Forecast stat values -->
      <div class="container forecast shadow p-4 mt-4" v-if="currentWeather && currentWeather.cod == 200">
        <div class="m-2"><strong>City:</strong> {{ currentWeather.name }}</div>
        <div class="m-2"><strong>Weather condition: </strong> <span class="weather-condition">{{ currentWeather.weather[0].description }}</span></div>
        <div class="m-2"><strong>Temperature: </strong>{{ currentWeather.main.temp }}° C <span><img :src="this.currentIcon" alt="Weather Condition Representation Icon"></span></div>
        <div class="m-2"><strong>Humidity: </strong> {{ currentWeather.main.humidity }}%.</div>
        <div class="m-2"><strong>Pressure: </strong> {{ currentWeather.main.pressure }} hpa</div>
        <div class="m-2"><strong>Wind Speed: </strong> {{ currentWeather.wind.speed }} m/s</div>
        <div class="m-2"><strong>Geo coords: </strong> <span>Lattitude:</span>{{ currentWeather.coord.lat }} || <span>Longitude:</span> {{ currentWeather.coord.lon }}</div>
        
      </div>
      <div v-else>
        "{{ currentCity }}" is not a valid.
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
      currentCountry: 'world',
      // current unit
      unit: 'metric',
      // current icon
      currentIcon: null
    }
    this.$set(this.currentCity);
  },
  methods: {
    getWeather(){
      // Make axios request to open weather api
      axios.get('https://api.openweathermap.org/data/2.5/weather?q=' + this.currentCity+ ',' + this.currentCountry + '&appid=fe435501a7f0d2f2172ccf5f139248f7&units=' + this.unit + '')
      .then((response) => {
          // takes response object & stores it in currentWeather
          this.currentWeather = response.data
          // takes value for image icon
          this.currentIcon = 'https://openweathermap.org/img/w/' + this.currentWeather.weather[0].icon + '.png'
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

/* Links styling */
.vuejs-link {
  color: #4fc08d;
  &:hover {
    color: #0d9155;
  }
}

.github-profile-link {
  color: #2c88e9;
  &:hover {
    color: #0357b1;
  }
}

.open-weather-api-link {
  color: #d26c22;
  &:hover {
    color: #b44b00;
  }
}
.vuejs-link, .github-profile-link, .open-weather-api-link {
  font-weight: bold;
}

.weather-condition {
  text-transform: capitalize
}
</style>