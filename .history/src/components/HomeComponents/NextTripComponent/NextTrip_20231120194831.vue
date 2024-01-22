<template>
  <div class="w-86 m-auto text-3xl font-semibold">
    <h2 class="my-16">Get inspiration for your next trip</h2>
    <ul>
      <li>lorem</li>
    </ul>
  </div>
</template>

<script setup>
const countryData = [
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

<style scoped>
li {
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.6) 100%
    ),
    url("../../../assets/next-trip-images/wold's-top-destiniation.jpeg"),
    lightgray 50% / cover no-repeat;
}
</style>
