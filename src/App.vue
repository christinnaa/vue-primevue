<script setup>
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import { ref } from 'vue';

const value = ref(null);
</script>

<template>
  <!-- <div class="flex flex-col items-center w-full h-screen justify-center bg-slate-50">
    <div class="border border-teal-200 p-12 rounded-3xl bg-white">
      <h1 class="text-3xl font-bold text-teal-500">
        Login
      </h1>
      <div class="card flex flex-col w-72">
        <div class="flex flex-col gap-2 mt-6">
          <label for="username">Username</label>
          <InputText id="username" v-model="value" size="small" />
        </div>
        <div class="flex flex-col gap-2 mt-3">
          <label for="password">Password</label>
          <InputText id="password" type="password" v-model="value" size="small" />
          <div class="flex justify-end pr-2">
            <p class="forgot-password">Forgot Password?</p>
          </div>
        </div>
      </div>
      <div class="card flex justify-content-center mt-4">
        <Button class="submit w-72" label="Log In" />
      </div>
    </div>
  </div> -->
  <router-view />
</template>

<style scoped>
.submit {
  margin-top: 10px;
  font-size: 16px;
  padding: px 20px;
}

.forgot-password {
  font-size: 12px;
  margin-top: -2px;
}
</style>
