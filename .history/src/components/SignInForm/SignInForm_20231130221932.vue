<template>
  <transition>
    <teleport to="body">
      <transition name="modal">
        <base-dialog
          v-if="inputsAreInvalid"
          title="Invalid Inputs"
          @close="closeDialog"
        >
          <template v-slot:default>
            <p v-if="!email">Email is required to log in</p>
            <p v-if="!password">Password is required to log in</p>
            <p v-if="password.length < 8">
              Password Length is 8 character at minimum
            </p>
            <p v-if="email.includes(' ')">Email can't have spaces in it</p>
          </template>

          <template v-slot:actions>
            <button
              @click="closeDialog"
              class="px-3 py-2.5 text-white bg-[var(--mainBlue)] w-32 search"
            >
              Close
            </button>
          </template>
        </base-dialog>
      </transition>
    </teleport>
  </transition>

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
        <input
          type="email"
          id="E-mail"
          class="w-full p-3 rounded"
          v-model="email"
        />
      </div>

      <div class="mt-5">
        <label for="pass" class="text-sm font-medium">Password</label><br />
        <input
          type="password"
          id="pass"
          class="w-full p-3 rounded"
          ref="passwordInput"
          v-model="password"
        />
        <figure>
          <img
            src="../../assets/Sign-in/eye.svg"
            alt="eye"
            class="relative -top-[35px] left-[550px] cursor-pointer"
            @click="showPassword"
          />
        </figure>
      </div>

      <button
        type="button"
        class="mt-9 h-11 rounded-lg text-white"
        @click="logIn"
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
import { ref } from "vue";
import BaseDialog from "../BaseDialog/BaseDialog.vue";

//reveal password
const passwordInput = ref("");
const showPassword = function () {
  if (passwordInput.value.type == "password") {
    passwordInput.value.type = Text;
  } else passwordInput.value.type = "password";
};
// redirect home after log in still missing login auth
const email = ref("");
const inputsAreInvalid = ref(false);
const password = ref("");
const logIn = function () {
  if (
    email.value.includes(".com") &&
    email.value.includes("@") &&
    !email.value.includes(" ") &&
    password.value.length >= 8
  ) {
    router.push({ name: "home" });
  } else inputsAreInvalid.value = true;
};

const closeDialog = function () {
  inputsAreInvalid.value = false;
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
.modal-enter-active,
.modal-leave-active {
  transition: all 0.25s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: scale(1.1);
}
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
