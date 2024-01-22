<template>
  <search-header />
  <div class="flex">
    <search-name></search-name>
    <hotel></hotel>
  </div>
</template>

<script setup>
import SearchHeader from "@/components/SearchPageComponents/SearchHeader.vue";
import SearchName from "@/components/SearchPageComponents/SearchByName.vue";
import hotel from "@/components/SearchPageComponents/searchData.vue";
</script>

<style scoped></style>
