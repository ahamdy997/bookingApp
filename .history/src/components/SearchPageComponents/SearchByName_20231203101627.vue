<template>
  <div class="flex items-start">
    <aside class="w-[295px] m-auto mt-16">
      <div class="rounded-md overflow-hidden container">
        <h2 class="ml-4 mt-5 p-0.5 font-medium">Search by property name</h2>
        <div
          class="flex justify-center rounded items-center bg-white inp gap-2.5 mt-4 mb-5"
        >
          <label for="search">
            <figure>
              <img
                src="../../assets/Search--page-images/search.svg"
                alt="search icon"
              />
            </figure>
          </label>
          <input
            class="h-10 rounded outline-none"
            type="text"
            id="search"
            placeholder="eg. Beach westpalm"
            v-model="hotelNameSearch"
            @click="storeData"
            @input="searchResults"
            @keydown="whiteoutInput"
          />
        </div>
      </div>
      <search-budget></search-budget>
      <search-rating />
    </aside>
    <hotel-data></hotel-data>
  </div>
  <nav
    class="w-86 m-auto justify-center m-auto flex items-center mt-[40px] gap-3"
    v-if="useAPIDataStore.totalPages"
  >
    <div class="flex flex-wrap">
      <!-- <span
        v-for="(page, index) in useAPIDataStore?.totalPages"
        :key="index"
        class="px-2 cursor-pointer rounded-xl"
        @click="paginationClickHandling(page, index, $event)"
      >
        {{ page }}
      </span> -->
      <span @click="paginationClickHandling(page, index,)>{{ useAPIDataStore.currentPage-- }}</span>
      <span>{{ useAPIDataStore.currentPage }}</span>
      <span>{{ useAPIDataStore.currentPage-- }}</span>

    </div>
  </nav>

  <!-- <div>
    <ul> -->
  <!-- Display paginated data -->
  <!-- <li v-for="item in paginatedData" :key="item.id">{{ item.name }}</li>
    </ul> -->

  <!-- Pagination controls -->
  <!-- <div>
      <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
      <button
        v-for="pageNumber in displayedPages"
        :key="pageNumber"
        @click="goToPage(pageNumber)"
        :class="{ active: pageNumber === currentPage }"
      >
        {{ pageNumber }}
      </button>
      <button @click="nextPage" :disabled="currentPage === totalPages">
        Next
      </button>
    </div>
  </div> -->

  <covid-warning></covid-warning>
  <the-footer></the-footer>
</template>

<script setup>
import SearchBudget from "@/components/SearchPageComponents/SearchByBudget.vue";
import hotelData from "@/components/SearchPageComponents/searchData.vue";
import { useAPIData } from "@/stores/APIDataStore.js";
import { ref, computed } from "vue";
import CovidWarning from "../HomeComponents/CovidWarning/CovidWarning.vue";
import TheFooter from "../TheFooter/TheFooter.vue";
import SearchRating from "./SearchByRating.vue";
import ApiPagination from "../APIFunction/GetPaginatedData";

const hotelNameSearch = ref("");
const useAPIDataStore = useAPIData();

//Search By Name Logic
const searchResults = function () {
  const query = hotelNameSearch.value.toLowerCase();
  if (query) {
    useAPIDataStore.currentPage = 1;
    useAPIDataStore.hotelSearchData = useAPIDataStore.realData.filter((item) =>
      item.property.name.toLowerCase().includes(query)
    );
  } else {
    useAPIDataStore.hotelSearchData = useAPIDataStore.realData.concat(
      useAPIDataStore.paginationResult
    );
  }
};

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

// const paginatedData = computed(() => useAPIDataStore.paginatedData);
// const displayedPages = computed(() => useAPIDataStore.displayedPages);
// const currentPage = ref(useAPIDataStore.currentPage);
// const totalPages = computed(() => useAPIDataStore.totalPages);

// const goToPage = (pageNumber) => {
//   useAPIDataStore.goToPage(pageNumber);
// };

// const prevPage = () => {
//   useAPIDataStore.goToPage(currentPage.value - 1);
// };

// const nextPage = () => {
//   useAPIDataStore.goToPage(currentPage.value + 1);
// };
</script>

<style scoped>
.container {
  background-color: rgba(242, 242, 242, 1);
}
.inp {
  margin-inline: 18px;
  border: 1px solid #e0e0e0;
}
.bg {
  background-color: var(--mainBlue);
  color: white;
}
</style>
