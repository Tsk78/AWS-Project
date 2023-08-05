<script setup>
import { RouterLink } from 'vue-router';
import HelloWorld from '../components/HelloWorld.vue'
import timeline from '../components/timeline.vue'
</script>

<template>
    <div>
        <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
        </a>
        <a href="https://vuejs.org/" target="_blank">
        <img src="../assets/vue.svg" class="logo vue" alt="Vue logo" />
        </a>
        <br>
        <router-link to = "/LoginPage"> Go to LoginPage</router-link>
        <router-link to = "/"> </router-link>
        <router-view></router-view>
    </div>
  <HelloWorld msg="AWS Project Website" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>