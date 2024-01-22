<template>
  <nav class="flex items-center justify-between w-86 m-auto h-17">
    <the-logo />
    <navbar-links />

    <div v-if="!noUser" class="register">
      <button
        type="button"
        class="rounded-md border-solid border cursor-pointer text-white py-2.5 px-4.5"
        @click="redirectRegister"
      >
        Register
      </button>
    </div>
    <navbar-user></navbar-user>
  </nav>
</template>

<style scoped>
button {
  border-color: var(--mainBlue);
  background: var(--mainBlue);
}

p.logo-name {
  color: #1b1f2d;
}
</style>

<script setup>
//import logo
import router from "@/router";
import TheLogo from "./TheLogo.vue";
import NavbarLinks from "./NavbarLinks.vue";
import NavbarUser from "./NavbarUser.vue";

const noUser = localStorage.getItem("user");
//redirect to register
const redirectRegister = function () {
  router.push("/register");
};
</script>
