import axios from 'axios'
import { WeatherState } from '../types'
import { ActionTree, GetterTree, MutationTree } from "vuex";

type WeatherGetter = GetterTree<WeatherState, any>
type WeatherMutation = MutationTree<WeatherState>
type WeatherAction = ActionTree<WeatherState, any>


const state: WeatherState = {
    error: '',
    weather: null,
    list: [],
};

const getters: WeatherGetter = {
    getWeather: state => state.weather,
    getWeatherList: state => state.list,
    getWeatherError: state => state.error,
};

const actions: WeatherAction = {
    async fetchWeather ({ commit }, location) {
        try {
            const { data } = await axios.get(`?q=${location}&units=metric&APPID=${process.env.API_KEY}`);

            commit('setWeather', data);
        } catch (error) {
            commit('setWeatherError', error.response.data.message);
        }
    },
};

const mutations: WeatherMutation = {
    setWeather: (state, weather) => {
        state.list = [...state.list, weather];
    },
    setWeatherError: (state, error) => (state.error = error),
};

export default {
    state,
    getters,
    actions,
    mutations
}
