<template>
  <aside class="w-86 m-auto bg-orange-500 mt-16">
    <div class="w-1/5 rounded-md overflow-hidden container">
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
        />
      </div>
    </div>
    <search-budget></search-budget>
  </aside>
</template>

<script setup>
import SearchBudget from "@/components/SearchPageComponents/SearchByBudget.vue";
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
