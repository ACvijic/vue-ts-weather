<template>
    <div class="search">
        <h1>
            Vue TS Weather
        </h1>

        <form @submit.prevent="searchWeather">
            <input type="text" @input="removeError" placeholder="City or Country" v-model="location">
            <button type="submit">
                Search
            </button>
        </form>

        <p class="error">
            {{error}}
        </p>
        <p class="error">
            {{getWeatherError}}
        </p>

        <div>
            <ul>
                <li v-for="(location, i) in getWeatherList" :key="i">
                    {{location.name}}: {{(location.main.temp)}} °C
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import { Action, Getter, Mutation } from "vuex-class";
    import { Weather } from "@/storage/types";

    @Component
    export default class Search extends Vue {
        @Getter('getWeatherList') public getWeatherList!: Weather[];
        @Getter('getWeather') public getWeather!: Weather;
        @Getter('getWeatherError') public getWeatherError!: string;
        @Action('fetchWeather') public fetchWeather!: any;
        @Mutation('setWeatherError') public setWeatherError!: any;


        public location = '';
        public error = '';

        public searchWeather() {
            this.setWeatherError('');

            if (!this.location) {
                this.error = 'Enter a name of a City or Country first';
                return;
            }

            this.fetchWeather(this.location);
            this.location = '';
            this.error = '';
        }

        public removeError() {
            this.error = '';
            this.setWeatherError('');
        }
    }
</script>

<style scoped lang="scss">
    ul {
        list-style-type: none;
    }
    li {
        display: block;
        margin: 0 2rem;
    }

    .error {
        color: red;
    }
</style>
