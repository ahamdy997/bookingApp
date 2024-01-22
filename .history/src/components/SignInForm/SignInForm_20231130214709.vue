<template>
  <div class="sign-in">
    <div class="w-86 m-auto h-17 flex items-center">
      <the-navbar-logo />
    </div>
    <form class="mt-24 flex justify-center flex-col m-auto">
      <header class="m-auto">
        <h2 class="font-semibold text-3xl">Sign in</h2>
      </header>
      <div class="mt-10">
        <label for="E-mail" class="text-sm font-medium">Email address</label
        ><br />
        <input type="email" id="E-mail" class="w-full p-3 rounded" />
      </div>

      <div class="mt-5">
        <label for="pass" class="text-sm font-medium">Password</label><br />
        <input type="password" id="pass" class="w-full p-3 rounded" />
        <figure>
          <img
            src="../../assets/Sign-in/eye.svg"
            alt="eye"
            class="relative top-20"
          />
        </figure>
      </div>

      <button
        type="button"
        class="mt-9 h-11 rounded-lg text-white"
        @click="redirectHome"
      >
        Sign In
      </button>

      <div class="mt-9 text-center">
        <p>
          Don’t have an account?
          <RouterLink to="/register"> Register </RouterLink>
        </p>
      </div>
    </form>
  </div>
</template>

<script setup>
//imports
import TheNavbarLogo from "../TheNavbar/TheLogo.vue";
import { RouterLink } from "vue-router";
import router from "@/router";

// redirect home after log in still missing login auth
const redirectHome = function () {
  router.push("/");
};

// Jwt Handling
// const generateToken = function () {
//   const secretKey = "ahmedhamdy";

//   const payload = {
//     userId: 123,
//     username: "ahmedhamdy@gmail.com",
//   };
//   const tokenExpiration = ".05h";

//   const token = jwt.sign(payload, secretKey, { expiresIn: tokenExpiration });

//   localStorage.setItem("authToken", token);

//   return token;
// };
</script>

<style scoped>
form {
  width: 38.5%;
}
input {
  background-color: rgba(242, 242, 242, 1);
  outline: none;
}
a {
  color: var(--mainBlue);
}
button {
  background-color: var(--mainBlue);
}
</style>
