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
  font-size: 24px;
  color: transparent;
  text-shadow: 0 0 0 #ffd700;
}

.filled,
.half {
  color: transparent;
  text-shadow: 0 0 0 #ffd700;
}
</style>
