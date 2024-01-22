<template>
  <div class="mt-5">
    <div class="content mt-5 rounded-md overflow-hidden">
      <h2 class="font-medium p-4 font-semibold">Rating</h2>

      <div class="enterBudget">
        <div
          class="setBudget flex justify-between items-center mt-5 mb-4 ml-4 text-sm"
        >
          <p class="text-[rgba(79, 79, 79, 1)] x text-[14px]">
            Show only Ratings more than
          </p>
        </div>
        <div class="rating flex justify-center mb-6">
          <div
            v-if="dataStore.metaData[0].title"
            v-for="n in parseInt(dataStore.metaData[0].title)"
            class="flex items-center w-[50px] border h-[46px] justify-center cursor-pointer"
            :key="n"
            @click="filterByRating(n)"
          >
            {{ n }}
            <figure>
              <img
                src="../../assets/Stars-for-Search-page/star-s-fill.svg"
                alt="rating pic"
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.content,
.font-medium {
  border: 1px solid #e0e0e0;
}
.font-medium {
  background-color: rgba(242, 242, 242, 1);
}
</style>

<script setup>
import { useAPIData } from "@/stores/APIDataStore.js";
const useAPIDataStore = useAPIData();
let realData = [];
const storeData = function () {
  realData = useAPIDataStore.hotelSearchData;
  console.log(realData);
};
const filterByRating = function (n) {
  useAPIDataStore.hotelSearchData = useAPIDataStore.realData.filter(
    (el) => el.property.reviewScore / 2 >= n
  );
};
</script>
