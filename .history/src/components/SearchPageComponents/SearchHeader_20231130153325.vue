<template>
  <header class="h-52 overflow-hidden">
    <div
      class="logo w-86 m-auto text-white mt-6 flex justify-between items-center"
    >
      <the-logo></the-logo>
      <navbar-links />
    </div>
  </header>
  <div
    class="shadow-2xl search rounded-lg w-[77%] h-16 bg-white m-auto -translate-y-1/2"
  >
    <keep-alive>
      <SearchForm />
    </keep-alive>
  </div>
</template>

<script setup>
//import Search Form

import SearchForm from "@/components/HomeComponents/HeaderComponent/HeaderSearchForm.vue";
</script>

<style scoped>
header {
  background: linear-gradient(180deg, #2969bf 0%, #144e9d 100%);
}
</style>
