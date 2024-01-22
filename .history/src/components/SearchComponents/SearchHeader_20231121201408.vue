<template>
  <header class="h-52 overflow-hidden">
    <div class="logo w-86 m-auto text-white mt-6 flex justify-between">
      <the-logo></the-logo>
      <navbar-links />
      <div class="flex gap-6 items-center">
        <figure>
          <img
            src="@/assets/header-logo/notification.svg"
            alt="notification bell"
          />
        </figure>
        <figure>
          <img src="@/assets/header-logo/user.svg" alt="user picture" />
        </figure>
      </div>
    </div>
  </header>
  <div
    class="shadow-2xl search rounded-lg w-9/12 h-16 bg-white m-auto -translate-y-1/2"
  >
    <search-form></search-form>
  </div>
</template>

<script setup>
//import Navbar
import TheLogo from "../TheNavbar/TheLogo.vue";
import NavbarLinks from "../TheNavbar/NavbarLinks.vue";
import SearchForm from "@/components/HomeComponents/HeaderComponent/HeaderSearchForm.vue";
</script>

<style scoped>
header {
  background: linear-gradient(180deg, #2969bf 0%, #144e9d 100%);
}
</style>
