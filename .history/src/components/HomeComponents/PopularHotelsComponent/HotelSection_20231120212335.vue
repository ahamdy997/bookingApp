<template>
  <section class="w-86 m-auto my-12">
    <header class="my-8 w-2/5">
      <h2 class="text-3xl my-4 font-semibold">Popular hotels</h2>
    </header>
    <article>
      <ul class="flex gap-5 items-center">
        <li class="w-3/12" v-for="hotel in hotels" :key="hotel.countryName">
          <img
            :src="hotel.imageSrc"
            class="rounded-lg"
            max-width="294"
            height="220"
            :alt="hotel.countryName"
          />
          <figcaption class="mt-4 text-xl font-bold">
            {{ hotel.countryName }}
          </figcaption>
          <p>{{ hotel.properties }}</p>
        </li>
      </ul>
    </article>
  </section>
</template>

<script setup>
const hotels = [
  {
    countryName: "Australia",
    properties: "2246 properties",
    imageSrc: require("../../../assets/home-images/Australia.jpeg"),
  },
  {
    countryName: "Japan",
    properties: "1278 properties",
    imageSrc: require("../../../assets/home-images/Japan.jpeg"),
  },
  {
    countryName: "New Zeeland",
    properties: "480 properties",
    imageSrc: require("../../../assets/home-images/New Zeeland.jpeg"),
  },
  {
    countryName: "Greece",
    properties: "320 properties",
    imageSrc: require("../../../assets/home-images/Greece.jpeg"),
  },
];
</script>

<style lang="scss" scoped></style>
