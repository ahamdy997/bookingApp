<template>
  <div v-for="data in dataStore.hotelSearchData" :key="data.name">
    {{ data.name }}
  </div>
</template>

<script setup>
import { useAPIData } from "@/stores/APIDataStore.js";
const dataStore = useAPIData();
console.log(dataStore);
</script>

<style lang="scss" scoped></style>
