<template>
  <div v-for="data in dataStore.hotelSearchData" :key="data.name">
    {{ data.name }}
  </div>
</template>

<script setup>
import { useAPIData } from "@/stores/APIDataStore";
const dataStore = useAPIData();
console.log(dataStore.how.map((val) => val));
</script>

<style lang="scss" scoped></style>
