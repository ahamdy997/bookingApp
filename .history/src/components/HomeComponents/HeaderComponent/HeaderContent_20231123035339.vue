<template>
  <div
    class="header-content bg-no-repeat m-auto w-86 flex items-center justify-center text-white"
  >
    <div class="content flex items-center flex-col">
      <h2 class="text-4xl my-5 font-bold">Enjoy Your Dream Vacation</h2>
      <p class="text-xl">
        Plan and book our perfect trip with expert advice, travel tips,
        destination
      </p>
      <p class="text-xl">information and inspiration from us</p>
    </div>
  </div>

  <div
    class="shadow-2xl search rounded-lg w-9/12 h-16 bg-white m-auto -translate-y-1/2"
  >
    <search-form></search-form>
  </div>
</template>

<script setup>
import SearchForm from "./HeaderSearchForm.vue";
</script>

<style scoped>
.header-content {
  border-radius: 10px;
}
.header-content {
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.3) 0%,
      rgba(0, 0, 0, 0.3) 100%
    ),
    url("../../../assets/home-images/f05ea716209b4ede5a3107407feb60d4.jpeg");
  background-size: cover;
  background-position: 25% 10%;
  height: 500px;
}
</style>
