<template>
  <div>
    <hotel-details></hotel-details>
  </div>
</template>

<script setup>
import HotelDetails from "@/components/HotelDetailsComponent/HotelDetail.vue";
import { useAPIData } from "@/stores/APIDataStore";
import BaseSpinner from "@/components/BaseSpinner/BaseSpinner.vue";
const dataStore = useAPIData;
</script>

<style scoped></style>
