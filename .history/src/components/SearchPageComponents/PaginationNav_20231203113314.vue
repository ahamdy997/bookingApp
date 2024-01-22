<template>
  <nav
    class="w-86 m-auto justify-center m-auto flex items-center mt-[40px] gap-3"
    v-if="useAPIDataStore.totalPages"
  >
    <div class="flex flex-wrap">
      <span
        v-for="(page, index) in useAPIDataStore?.totalPages"
        :key="index"
        class="px-2 cursor-pointer rounded-xl"
        @click="paginationClickHandling(page, index, $event)"
      >
        {{ page }}
      </span>
    </div>
  </nav>
</template>

<script setup>
import ApiPagination from "../APIFunction/GetPaginatedData";

import { useAPIData } from "@/stores/APIDataStore.js";
const useAPIDataStore = useAPIData();

// paginationClickHandling and bg color of span
const paginationClickHandling = function (num, index, event) {
  useAPIDataStore.currentPage = num;
  if (num === index + 1) event.target.classList.add("bg");
  if (Number(num) % 2 == 0 || num == 2) {
    ApiPagination(num);
    console.log(useAPIDataStore.paginationResult);
    console.log(num);
  } else {
    useAPIDataStore.hotelSearchData = useAPIDataStore.hotelSearchData.concat(
      useAPIDataStore.paginationResult
    );
    console.log(useAPIDataStore.hotelSearchData);
  }
};
</script>

<style scoped>
.bg {
  background-color: var(--mainBlue);
  color: white;
}
</style>
