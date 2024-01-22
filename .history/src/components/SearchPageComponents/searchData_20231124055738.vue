<template>
  <div v-for="data in x" :key="data.name">
    {{ data.name }}
  </div>
</template>

<script setup>
import { useAPIData } from "@/stores/APIDataStore.js";
const dataStore = useAPIData();
const x = dataStore.hotelSearchData.map((val) => val);
</script>

<style lang="scss" scoped></style>
