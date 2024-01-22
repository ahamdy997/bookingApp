<template>
  <div class="w-40">
    <VueDatePicker v-model="date"></VueDatePicker>
  </div>
</template>

<script setup>
import { ref } from "vue";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

const date = ref();
</script>
