import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        mapboxKey: process.env.VUE_APP_MAPBOX_KEY,
        baseMapboxURL: process.env.VUE_APP_MAPBOX_URL,
        weatherKey: process.env.VUE_APP_WEATHER_KEY,
        baseWeatherURL: process.env.VUE_APP_WEATHER_URL,
        searchQuery: "",
        geocodeData: {},
        weatherData: {},
    },
    getters: {
        getCoords(state) {
            return state.geocodeData.features[0].geometry.coordinates;
        },
        getLocation(state) {
            if (state.geocodeData.features) {
                return state.geocodeData.features[0].place_name;
            }
            return null;
        },
        getSunrise(state) {
            if (state.weatherData.current) {
                return state.weatherData.current.sunrise;
            }
            return null;
        },
        getSunset(state) {
            if (state.weatherData.current) {
                return state.weatherData.current.sunset;
            }
            return null;
        },
        getCurrent(state) {
            if (state.weatherData.current) {
                return state.weatherData.current;
            }
            return null;
        },
        getCurrentTemp(state) {
            if (state.weatherData.current) {
                return Math.round(state.weatherData.current.temp);
            }
            return null;
        },
        getCurrentDescription(state) {
            if (state.weatherData.current) {
                return state.weatherData.current.weather[0].description
                    .split(" ")
                    .map(
                        (word) => word.slice(0, 1).toUpperCase() + word.slice(1)
                    )
                    .join(" ");
            }
            return null;
        },
        getDailyForecast(state) {
            if (state.weatherData.current) {
                return state.weatherData.daily;
            }
            return null;
        },
        getHourlyForecast(state) {
            if (state.weatherData.current) {
                return state.weatherData.hourly;
            }
            return null;
        },
    },
    mutations: {
        setSearchQuery(state, query) {
            state.searchQuery = query;
        },
        setGeocodeData(state, data) {
            state.geocodeData = data;
        },
        setWeatherData(state, data) {
            state.weatherData = data;
        },
    },
    actions: {
        async getWeatherForCurrentLocation(context) {
            await window.navigator.geolocation.getCurrentPosition(
                async (position) => {
                    // get the latitude and longitude returned
                    const lat = position.coords.latitude;
                    const long = position.coords.longitude;
                    console.log(position);

                    // set the query and fetch weather
                    context.commit("setSearchQuery", `${long},${lat}`);
                    await context.dispatch("sendGeocodeRequest");
                    await context.dispatch("fetchWeatherData");
                },
                console.log,
                {
                    enableHighAccuracy: true,
                    maximumAge: 0,
                }
            );
        },
        async initialiseSearch(context, query) {
            await context.commit("setSearchQuery", query);
            await context.dispatch("sendGeocodeRequest");
            await context.dispatch("fetchWeatherData");
        },
        async sendGeocodeRequest(context) {
            console.log(
                `${context.state.baseMapboxURL}${context.state.searchQuery}.json?access_token=${context.state.mapboxKey}`
            );
            const location = await axios.get(
                `${context.state.baseMapboxURL}${context.state.searchQuery}.json?access_token=${context.state.mapboxKey}`
            );
            context.commit("setGeocodeData", location.data);
        },
        async fetchWeatherData(context) {
            const coords = context.getters.getCoords;
            const weather = await axios.get(
                `${context.state.baseWeatherURL}?lat=${coords[1]}&lon=${coords[0]}&units=metric&appid=${context.state.weatherKey}`
            );
            context.commit("setWeatherData", weather.data);
        },
    },
    modules: {},
});
