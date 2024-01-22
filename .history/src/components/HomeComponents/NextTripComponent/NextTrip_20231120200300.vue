<template>
  <div class="w-86 m-auto text-3xl font-semibold">
    <h2 class="my-16">Get inspiration for your next trip</h2>
    <ul class="flex justify-between h-72">
      <li>
        <h3>pppp</h3>
        <p>{{ inspirationData.content }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
const inspirationData = [
  {
    head: "Sydeny’s 10 most fashionable 5 star hotels",
    content:
      "Browse the fastest growing tourism sector in the heart of Australia tourism capital ....",
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

<style scoped>
li {
  background-image: url("@/assets/next-trip-images/top-destiniation.jpeg");
  /* background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.5) 100%
    ),
    url(@/assets/next-trip-images/top-destiniation.jpeg),
    lightgray 50% / cover no-repeat; */
}
</style>
