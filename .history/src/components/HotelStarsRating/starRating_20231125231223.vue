<template>
  <div class="star-rating">
    <template v-for="n in 5" :key="n">
      <span v-if="n <= +starsNumber" class="filled">&#9733;</span>
      <span v-else-if="n - 0.5 === +starsNumber" class="half">&#9733;</span>
      <span v-else>&#9734;</span>
    </template>
  </div>
</template>

<script setup>
const starsNumber = defineProps(["starsNumber"]);
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
