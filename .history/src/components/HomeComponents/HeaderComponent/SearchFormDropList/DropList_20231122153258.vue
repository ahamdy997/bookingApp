<template>
  <div class="w-40">
    <VueDatePicker v-model="date" placeholder="check in date"></VueDatePicker>
  </div>
</template>

<script setup>
import { ref } from "vue";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

const date = ref();
</script>

<style>
.dp__pointer {
  background-color: #f2f2f2;
  border: none;
  padding-inline: 0;
}
.dp__active_date {
  color: black;
  background-color: var(--mainBlue);
  border-radius: 50%;
}
.dp__action_select {
  background-color: var(--mainBlue) !important;
}
svg {
  visibility: hidden;
}
</style>
