<script setup>
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import { ref, computed } from 'vue';

// const password = ref('');
let showPassword = ref(false);

const togglePassword = ()=> {
  showPassword.value = !showPassword.value;
}

const eyeIcon = computed(() => {
  return showPassword.value ? 'pi pi-eye' : 'pi pi-eye-slash';
});

const inputType = computed(() => {
  return showPassword.value ? 'text' : 'password';
});
</script>

<template>
  <div class="flex flex-col items-center w-full h-screen justify-center bg-slate-50">
    <div class="border border-teal-200 p-12 rounded-3xl bg-white">
      <h1 class="text-3xl font-bold text-teal-500">
        Login
      </h1>
      <div class="card flex flex-col w-72">
        <div class="flex flex-col gap-2 mt-6">
          <label for="username">Username</label>
          <InputText id="username" v-model="username" size="small" />
        </div>
        <div class="flex flex-col gap-2 mt-3">
          <label for="password">Password</label>
          <!-- <p>{{ showPassword }}</p> -->
          <span class="relative">
            <div @click="togglePassword()">
              <i :class="eyeIcon" class="text-gray-400 absolute top-2/4 -mt-2 pr-1 right-3 text-surface-400 dark:text-surface-600 hover:text-teal-500" />
            </div>
            <InputText :type="inputType" v-model="password" class="pr-12" />
          </span>
          <div class="flex justify-end pr-2">
            <p class="forgot-password">Forgot Password?</p>
          </div>
        </div>
        
      </div>
      <div class="card flex justify-content-center mt-4">
        <router-link to="/home">
          <Button class="submit w-72" label="Log In" />
        </router-link>
      </div>
    </div>
  </div>
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
