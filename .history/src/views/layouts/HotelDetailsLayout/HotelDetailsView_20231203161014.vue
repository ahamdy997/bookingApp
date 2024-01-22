<template>
  <div>
    <base-spinner
      v-if="
        dataStore.hotelDetails.hotel_name === undefined &&
        dataStore.hotelDetails?.address === undefined
      "
    ></base-spinner>
    <hotel-details v-else></hotel-details>
  </div>
</template>

<script setup>
import HotelDetails from "@/components/HotelDetailsComponent/HotelDetail.vue";
import { useAPIData } from "@/stores/APIDataStore";
import BaseSpinner from "@/components/BaseSpinner/BaseSpinner.vue";
const dataStore = useAPIData;
</script>

<style scoped></style>
