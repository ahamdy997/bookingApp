<template>
  <div class="w-40">
    <VueDatePicker v-model="date" class="text"></VueDatePicker>
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
}
.dp__active_date {
  color: black;
  background-color: var(--mainBlue);
  border-radius: 50%;
}
.dp__action_select {
  background-color: var(--mainBlue);
}
svg {
  visibility: hidden;
}
.dp__input_icon {
  display: hidden !important;
}
</style>
