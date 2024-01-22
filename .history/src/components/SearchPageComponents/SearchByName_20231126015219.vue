<template>
  <div class="flex items-center">
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
            @input="searchResults"
            @click="storeData"
          />
        </div>
      </div>
      <search-budget></search-budget>
    </aside>
    <hotel-data></hotel-data>
  </div>
</template>

<script setup>
import SearchBudget from "@/components/SearchPageComponents/SearchByBudget.vue";
import hotelData from "@/components/SearchPageComponents/searchData.vue";
import { useAPIData } from "@/stores/APIDataStore.js";
import { ref } from "vue";
const hotelNameSearch = ref("");
const useAPIDataStore = useAPIData();

let realData = [];
const storeData = function () {
  realData = useAPIData.hotelSearchData;
  console.log(realData);
};
const searchResults = function () {
  const query = hotelNameSearch.value.toLowerCase();
  if (query) {
    useAPIDataStore.hotelSearchData = useAPIDataStore.hotelSearchData.filter(
      (item) => item.property.name.toLowerCase().includes(query)
    );
  } else {
    useAPIDataStore.hotelSearchData = realData;
  }
};
</script>

<style scoped>
.container {
  background-color: rgba(242, 242, 242, 1);
}
.inp {
  margin-inline: 18px;
  border: 1px solid #e0e0e0;
}
</style>
