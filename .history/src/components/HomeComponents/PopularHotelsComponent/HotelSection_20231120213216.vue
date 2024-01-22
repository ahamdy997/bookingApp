<template>
  <section class="w-86 m-auto my-16">
    <header class="my-6 w-2/5">
      <h2 class="text-3xl my-4 font-semibold">Popular hotels</h2>
    </header>
    <article>
      <ul class="flex gap-5 items-center">
        <li class="w-3/12" v-for="hotel in hotels" :key="hotel.title">
          <img
            :src="hotel.imageSrc"
            class="rounded-lg"
            max-width="294"
            height="300"
            :alt="hotel.title"
          />
          <figcaption class="mt-4 text-xl font-bold">
            {{ hotel.title }}
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
    title: "Lakeside Motel Warefront",
    properties: "2246 properties",
    imageSrc: require("../../../assets/hotel-images/Australia.jpeg"),
  },
  {
    title: "Recce Graham resort",
    properties: "1278 properties",
    imageSrc: require("../../../assets/home-images/Japan.jpeg"),
  },
  {
    title: "Fireside Dinners",
    properties: "480 properties",
    imageSrc: require("../../../assets/home-images/New Zeeland.jpeg"),
  },
  {
    title: "Oculous Inn Stay",
    properties: "320 properties",
    imageSrc: require("../../../assets/home-images/Greece.jpeg"),
  },
];
</script>

<style lang="scss" scoped></style>
