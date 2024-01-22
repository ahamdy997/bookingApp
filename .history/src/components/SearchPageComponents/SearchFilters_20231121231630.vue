<template>
  <section class="w-86 m-auto bg-orange-500 mt-16">
    <div class="w-1/5 rounded-md overflow-hidden container">
      <h2 class="ml-4 mt-5 p-0.5">Search by property name</h2>
      <div class="flex justify-center items-center bg-white">
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
          placeholder="inpData.placeholder"
        />
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
div {
  background-color: rgba(242, 242, 242, 1);
}
.inp {
  margin-inline: 18px;
}
</style>
