<template>
    <div id="app">
        <Home />
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import Home from './home/Home.vue';

    @Component({
        components: {
            Home,
        },
    })
    export default class App extends Vue {}
</script>

<style lang="scss">
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #2c3e50;
    }
</style>
