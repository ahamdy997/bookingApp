<template>
  <div>
    <hotel-details></hotel-details>
  </div>
</template>

<script setup>
import HotelDetails from "@/components/HotelDetailsComponent/HotelDetail.vue";
import { useAPIData } from "@/stores/APIDataStore";
const dataStore = useAPIData;
</script>

<style scoped></style>
