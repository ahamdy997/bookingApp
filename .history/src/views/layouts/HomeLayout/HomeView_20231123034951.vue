<template class="h-screen">
  <the-navbar></the-navbar>
  <the-header />
  <covid-warning />
  <enjoy-dream />
  <next-trip />
  <hotel-section />
  <advertise />
  <explore-places />
  <the-footer />
</template>

<script setup>
// imports
import TheNavbar from "@/components/TheNavbar/TheNavbar.vue";
import TheHeader from "@/components/HomeComponents/HeaderComponent/TheHeader.vue";
import CovidWarning from "@/components/HomeComponents/CovidWarning/CovidWarning.vue";
import EnjoyDream from "@/components/HomeComponents/EnjoyDreamComponent/EnjoyDream.vue";
import NextTrip from "@/components/HomeComponents/NextTripComponent/NextTrip.vue";
import HotelSection from "@/components/HomeComponents/PopularHotelsComponent/HotelSection.vue";
import Advertise from "@/components/HomeComponents/DownloadMobileComponent/download-mobile.vue";
import ExplorePlaces from "@/components/HomeComponents/ExploreComponent/explore-places.vue";
import TheFooter from "@/components/TheFooter/TheFooter.vue";
</script>
