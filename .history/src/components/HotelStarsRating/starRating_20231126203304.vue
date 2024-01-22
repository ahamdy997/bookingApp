<template>
  <div class="star-rating">
    <div v-for="n in 5" :key="n">
      <span v-if="n <= Number(starsNumber)" class="filled">&#9733;</span>
      <span v-else-if="n - 0.5 === Number(starsNumber)" class="half"
        >&#9733;</span
      >
      <span v-else>&#9734;</span>
    </div>
  </div>
</template>

<script setup>
const starsNumber = defineProps({ starsNumber: { type: Number } });
// const Number = Number(starsNumber);
</script>

<style scoped>
.star-rating {
  font-size: 20px;
  color: transparent;
  text-shadow: 0 0 0 #ffd700;
}

.filled,
.half {
  color: transparent;
  text-shadow: 0 0 0 #ffd700;
}
</style>
