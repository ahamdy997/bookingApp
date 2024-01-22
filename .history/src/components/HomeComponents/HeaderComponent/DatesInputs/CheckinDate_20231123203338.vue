<template>
  <div class="w-40">
    <div class="w-40">
      <VueDatePicker
        v-model="indate"
        placeholder="Check in date"
        id="checkinDate"
        format="MM-dd-yyyy"
        value-format="YYYY-MM-DD"
        :enable-time-picker="false"
        @input="checkinDateValue"
      >
      </VueDatePicker>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

const indate = ref("");

const emit = defineEmits(["indate"]);
const checkinDateValue = () => {
  emit("indate");
};
</script>
