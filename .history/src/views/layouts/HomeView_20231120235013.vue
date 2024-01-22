<template>
  <div class="home">
    <the-header />
    <covid-warning />
    <enjoy-dream />
    <next-trip />
    <hotel-section />
    <advertise />
  </div>
</template>

<script setup>
// imports
import TheHeader from "@/components/HomeComponents/HeaderComponent/TheHeader.vue";
import CovidWarning from "@/components/HomeComponents/CovidWarning/CovidWarning.vue";
import EnjoyDream from "@/components/HomeComponents/EnjoyDreamComponent/EnjoyDream.vue";
import NextTrip from "@/components/HomeComponents/NextTripComponent/NextTrip.vue";
import HotelSection from "@/components/HomeComponents/PopularHotelsComponent/HotelSection.vue";
import Advertise from "@/components/HomeComponents/DownloadMobileComponent/download-mobile.vue";
</script>
