<template>
  <div>
    <hotel-details v-if="dataStore.hotelDetails.hotel_name"></hotel-details>
  </div>
</template>

<script setup>
import HotelDetails from "@/components/HotelDetailsComponent/HotelDetail.vue";
import dataStore from "@/stores/APIDataStore";
</script>

<style scoped></style>
