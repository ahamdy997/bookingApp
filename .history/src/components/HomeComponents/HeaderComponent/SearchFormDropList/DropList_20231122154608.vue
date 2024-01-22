<template>
  <label for="checkinDate">
    <figure>
      <img
        src="../../../assets/Form-Svg/calendar.svg"
        alt=" Calendar pic"
        class="cursor-pointer mx-1"
        width="20"
        height="20"
      />
    </figure>
  </label>
  <div class="w-40">
    <VueDatePicker
      v-model="date"
      placeholder="Check in date"
      id="checkinDate"
    ></VueDatePicker>
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
  padding-inline: 4px;
  font-size: 13px;
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

.dp__pointer::placeholder {
  color: light gray;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
}
</style>
