<template>
  <section class="w-86 m-auto my-12">
    <header class="my-8">
      <h2 class="text-2xl my-4 font-bold">Enjoy your dream vacation</h2>
      <p class="w-3/6">
        Plan and book our perfect trip with expert advice, travel tips,
        destination information and inspiration from us
      </p>
    </header>
    <ul class="flex gap-5 items-center">
      <li class="w-3/12" v-for="data in countryData" :key="data.countryName">
        <img :src="imageSrc" class="rounded-lg" :alt="data.countryName" />
        <figcaption class="mt-4 text-xl font-bold">
          {{ data.countryName }}
        </figcaption>
        <p>{{ data.properties }}</p>
      </li>
    </ul>
  </section>
</template>

<script setup>
const countryData = [
  {
    countryName: "Australia",
    properties: "2246 properties",
  },
  {
    countryName: "Japan",
    properties: "1278 properties",
  },
  {
    countryName: "New Zeeland",
    properties: "480 properties",
  },
  {
    countryName: "Greece",
    properties: "320 properties",
  },
];
const imageSrc = require("../../../assets/home-images/");
</script>

<style scoped>
section {
  color: #181818;
}
img {
  height: 220px;
}
</style>
