<template>
  <form class="flex items-center justify-center h-full flex gap-2">
    <input
      class="px-3 py-5 h-10 rounded w-48"
      type="text"
      name="Location"
      id=""
    />
    <input class="px-3 py-5 h-10 rounded w-48" type="text" name="" id="" />
    <input class="px-3 py-5 h-10 rounded w-48" type="text" name="" id="" />
    <input class="px-3 py-5 h-10 rounded w-48" type="text" name="" id="" />
    <input class="px-3 py-5 h-10 rounded w-48" type="text" name="" id="" />

    <button type="button" class="px-3 py-2.5 text-white w-48">Search</button>
  </form>
</template>

<script setup></script>

<style scoped>
input {
  background-color: #f2f2f2;
}
button {
  border-radius: 6px;
  background-color: var(--mainBlue);
}
</style>
