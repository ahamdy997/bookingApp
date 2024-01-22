<template>
  <div>
    <base-spinner v-if="dat"></base-spinner>
    <hotel-details v-else></hotel-details>
  </div>
</template>

<script setup>
import HotelDetails from "@/components/HotelDetailsComponent/HotelDetail.vue";
import BaseSpinner from "@/components/BaseSpinner/BaseSpinner.vue";
import { useAPIData } from "@/stores/APIDataStore";
dataStore = useAPIData();
</script>

<style scoped></style>
