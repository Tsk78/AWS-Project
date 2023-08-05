<script setup>
import { RouterLink } from 'vue-router';
import HelloWorld from '../components/HelloWorld.vue'
import timeline from '../components/timeline.vue'
</script>

<template>
    <div >
    <v-card
      class="mx-auto pa-12 pb-8"
      elevation="8"
      max-width="448"
      rounded="lg"
    >
    <h1 id="text">Welcome Back!</h1>
      <div class="text-subtitle-1 text-medium-emphasis">Account</div>

      <v-text-field
        density="compact"
        placeholder="Username"
        prepend-inner-icon="../assets/user.svg"
        variant="outlined"
      ></v-text-field>

      <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
        Password

        <a
          class="text-caption text-decoration-none text-blue"
          href="#"
          rel="noopener noreferrer"
          target="_blank"
        >
          Forgot login password?</a>
      </div>

      <v-text-field
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'password'"
        density="compact"
        placeholder="Enter your password"
        prepend-inner-icon= '{<font-awesome-icon icon="circle-user" style="color: #8c857b;" />}'
        variant="outlined"
        @click:append-inner="visible = !visible"
      ></v-text-field>
      <v-btn
        block
        class="mb-8"
        color="blue"
        size="large"
        variant="tonal"
      >
        Log In
      </v-btn>

      <v-card-text class="text-center">
        <a
          class="text-blue text-decoration-none"
          href="#"
          rel="noopener noreferrer"
          target="_blank"
        >
          Sign up now <v-icon icon="mdi-chevron-right"></v-icon>
        </a>
      </v-card-text>
    </v-card>
    </div>
</template>

<script>
  export default {
    data: () => ({
      visible: false,
    }),
  }
</script>

<style scoped>
#text{
  color: #A50832;
  position: fixed;
  top:381px;
  left: 60px;
  width: 178px;
  height: 28px;
  font-size: 24px;
  font-family: helvetica;
  font-weight: bold;
}
</style>