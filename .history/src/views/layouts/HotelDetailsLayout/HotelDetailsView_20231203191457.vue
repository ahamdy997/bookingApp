<template>
  <div>
    <base-spinner v-if="dataStore.isLoading"></base-spinner>
    <hotel-details v-else></hotel-details>
  </div>
</template>

<script setup>
import HotelDetails from "@/components/HotelDetailsComponent/HotelDetail.vue";
import BaseSpinner from "@/components/BaseSpinner/BaseSpinner.vue";
import { useAPIData } from "@/stores/APIDataStore";
const dataStore = useAPIData();
</script>

<style scoped></style>
