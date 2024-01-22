<template>
  <search-header />
  <div class="flex w-86 m-auto gap-10">
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
