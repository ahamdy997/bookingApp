<template>
  <nav class="flex items-center justify-between h-17">
    <the-logo />
    <div class="gap-12 flex items-start">
      <router-link to="/">Home</router-link>
      <router-link to="/about">Discover</router-link>
      <router-link to="/about">Activities</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/about">Contact</router-link>
    </div>

    <div class="register">
      <button
        type="button"
        class="rounded-md border-solid border cursor-pointer text-white py-2.5 px-4.5"
        @click="redirectRegister"
      >
        Register
      </button>
    </div>
  </nav>
</template>

<style scoped>
button {
  border-color: var(--mainBlue);
  background: var(--mainBlue);
}
a {
  color: #333;
}
p.logo-name {
  color: #1b1f2d;
}
</style>

<script setup>
//import logo
import router from "@/router";
import TheLogo from "./TheLogo.vue";

//redirect to register
const redirectRegister = function () {
  router.push("/register");
};
</script>
