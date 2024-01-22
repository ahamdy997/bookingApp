<template>
  <form @submit.prevent class="flex gap-2 items-center">
    <input
      class="px-3 py-2.5 w-36 h-5"
      type="text"
      name="Location"
      id=""
      placeholder=""
    />
    <input class="px-3 py-2.5 w-36 h-5" type="text" name="" id="" />
    <input class="px-3 py-2.5 w-36 h-5" type="text" name="" id="" />
    <input class="px-3 py-5 w-36 h-5" type="text" name="" id="" />
    <input class="px-3 py-2.5 h-5 w-36" type="text" name="" id="" />

    <button class="px-3 py-2.5 h-5 w-36" type="button">Search</button>
  </form>
</template>

<script setup></script>

<style scoped>
input {
  background-color: #f2f2f2;
}
</style>
