<script lang="ts" setup>
import {RouterLink} from 'vue-router'
import {ref} from "vue"
import {com_post} from "@/utils/request";


const loginForm = ref({
  username: 'admin',
  password: 'admin123'

})

const handleLogin = (event: Event) => {
  event.preventDefault()
  com_post('/api/login', loginForm.value).then((res: any) => {
    if (res.code === 200) {
      console.log('Login Success');
    } else {
      console.log('Login Failed');
    }
  });
}

</script>

<template>
  <div>
    <h1>Login</h1>
    <form @submit="handleLogin">
      <label for="username">UserName</label>
      <input id="username" v-model="loginForm.username" name="username" required type="text">
      <label for="password">Password</label>
      <input id="password" v-model="loginForm.password" name="password" required type="password">
      <button type="submit">Login</button>
    </form>
    <p>Don't have an account? <router-link to="/register">Register</router-link></p>
  </div>
</template>

<style scoped>

</style>