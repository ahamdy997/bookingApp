<template>
  <nav
    class="w-86 m-auto justify-center m-auto flex items-center mt-[40px] gap-3"
    v-if="useAPIDataStore.totalPages"
  >
    <div class="flex flex-wrap">
      <vue-awesome-paginate
        :total-items="useAPIDataStore.totalPages"
        :items-per-page="10"
        :max-pages-shown="4"
        v-model="useAPIDataStore.currentPage"
        :on-click="onClickHandler"
      />
    </div>
  </nav>
</template>

<script setup>
import ApiPagination from "../APIFunction/GetPaginatedData";

import { useAPIData } from "@/stores/APIDataStore.js";
const useAPIDataStore = useAPIData();

const onClickHandler = (page) => {
  if (page % 2 == 0) {
    ApiPagination(page);
    console.log(useAPIDataStore.paginationResult);
    console.log(page);
  } else {
    useAPIDataStore.hotelSearchData = useAPIDataStore.hotelSearchData.concat(
      useAPIDataStore.paginationResult
    );
    console.log(useAPIDataStore.hotelSearchData);
  }
};

// const paginationClickHandling = function () {
//   useAPIDataStore.currentPage = num;
//   if (num === index + 1) event.target.classList.add("bg");
//   if (Number(num) % 2 == 0 || num == 2) {
//     ApiPagination(num);
//     console.log(useAPIDataStore.paginationResult);
//     console.log(num);
//   } else {
//     useAPIDataStore.hotelSearchData = useAPIDataStore.hotelSearchData.concat(
//       useAPIDataStore.paginationResult
//     );
//     console.log(useAPIDataStore.hotelSearchData);
//   }
// };
</script>

<style scoped>
.bg {
  background-color: var(--mainBlue);
  color: white;
}
</style>
<style>
.pagination-container {
  display: flex;
  column-gap: 10px;
}
.paginate-buttons {
  height: 40px;
  width: 40px;
  border-radius: 20px;
  cursor: pointer;
  background-color: rgb(242, 242, 242);
  border: 1px solid rgb(217, 217, 217);
  color: black;
}
.paginate-buttons:hover {
  background-color: #d8d8d8;
}
.active-page {
  background-color: #3498db;
  border: 1px solid #3498db;
  color: white;
}
.active-page:hover {
  background-color: #2988c8;
}
</style>
