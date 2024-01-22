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

const starsNumber=defineProps()
export default {
  props: {
    rating: {
      type: Number,
      required: true,
      validator: (value) => value >= 0 && value <= 5,
    },
  },
};
</scrip>
