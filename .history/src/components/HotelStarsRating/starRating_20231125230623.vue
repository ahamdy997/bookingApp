<template>
  <div class="text-[24px] text-[#ffd700]">
    <template v-for="n in 5" :key="n">
      <span v-if="n <= rating" class="text-[#ffd700]">&#9733;</span>
      <span v-else-if="n - 0.5 === rating" class="half">&#9733;</span>
      <span v-else>&#9734;</span>
    </template>
  </div>
</template>

<script setup>
const starsNumber = defineProps("starsNumber");
</script>

<style scoped>
.star-rating {
  font-size: 24px; /* Adjust the font size as needed */
  color: #ffd700; /* Color of filled stars */
}

.filled,
.half {
  color: #ffd700; /* Color of filled stars */
}
</style>
