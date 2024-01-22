<template>
  <div class="w-40">
    <VueDatePicker
      v-model="date"
      placeholder="Check in date"
      id="checkinDate"
      format="MM/dd/yyyy"
      value-format="MM-dd-yyy"
    >
      ></VueDatePicker
    >
  </div>
</template>

<script setup>
import { ref } from "vue";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

const date = ref();
</script>

<style scoped>
.
</style>
