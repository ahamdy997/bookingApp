<template>
  <div v-for="data in dataStore.hotelSearchData" :key="data.name">
    {{ data.name }}
  </div>
</template>

<script setup>
import { useAPIData } from "@/stores/APIDataStore";
const dataStore = useAPIData();
dataStore.hotelSearchData.map((val) => console.log(val));
</script>

<style lang="scss" scoped></style>
