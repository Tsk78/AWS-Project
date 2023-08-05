<script setup>
import { RouterLink } from 'vue-router';
import HelloWorld from '../components/HelloWorld.vue';
import timeline from '../components/timeline.vue';
import termsText from '../components/termsText.js';
</script>

<template>
  <div id="terms-page">
    <h1 id = "terms-heading">Terms and Conditions</h1>
    <div class="terms-box">
      {{ termsText }}
    </div>
  </div>
</template>

<style scoped>
#terms-page{
  height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  background-color: #FFF5EB;
}

#terms-heading {
  font-family: Helvetica;
  font-size: 1.8rem;
  font-weight: bold;
  position: relative;
  margin-top: 2rem;
  margin-left: 2rem;
  color: #A50832;
}

.terms-box {
  max-width: 600px;
  width: 80%;
  background-color: #FFFFFF;
  border-radius: 10px;
  padding: 20px;
  margin-top: 5%;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  overflow-y: auto; /* Enable vertical scrolling */
  overflow-x: hidden;
  word-wrap: break-word;
  margin-right: -1.5rem;
}
</style>