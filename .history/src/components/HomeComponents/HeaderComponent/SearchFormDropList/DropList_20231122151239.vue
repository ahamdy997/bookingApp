<template>
  <div class="w-40">
    <VueDatePicker
      v-model="date"
      class="text"
      style="
         {
          backgroundcolor: 'black';
        }
      "
    ></VueDatePicker
    ><date-pick v-model="date" :editable="false"></date-pick>
  </div>
</template>

<script setup>
import { ref } from "vue";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

const date = ref();
</script>

<style>
.text {
  background-color: aquamarine;
}
</style>
