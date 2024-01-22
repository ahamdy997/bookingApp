<template>
  <div class="w-40" >
    <div class="checkin flex destination rounded items-center">
      <label for="checkinDate">
        <figure>
          <img
            src="../../../../assets/Form-Svg/calendar.svg"
            alt=" Calendar pic"
            class="cursor-pointer mx-1"
            width="20"
            height="20"
          />
        </figure>
      </label>
      <div class="w-40">
        <VueDatePicker
          v-model="indate"
          placeholder="Check in date"
          id="checkinDate"
          format="MM-dd-yyyy"
          value-format="YYYY-MM-DD"
          :enable-time-picker="false"
          @input="$emit("checkin-date" ,indate)"
        >
          ></VueDatePicker
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

const indate = ref();
</script>
