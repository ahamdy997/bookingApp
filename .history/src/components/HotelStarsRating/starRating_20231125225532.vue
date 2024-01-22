<template>
  <div class="star-rating">
    <template v-for="n in 5" :key="n">
      <span v-if="n <= rating" class="text-[#ffd700]">&#9733;</span>
      <span v-else-if="n - 0.5 === rating" class="half">&#9733;</span>
      <span v-else>&#9734;</span>
    </template>
  </div>
</template>

<style scoped>
.star-rating {
  font-size: 24px; /* Adjust the font size as needed */
  color: #ffd700; /* Color of filled stars */
}
</style>

<script>
export default {
  props: {
    rating: {
      type: Number,
      required: true,
      validator: (value) => value >= 0 && value <= 5,
    },
  },
};
</script>
