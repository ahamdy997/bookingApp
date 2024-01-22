<template>
  <div class="location flex destination rounded items-center">
    <label for="browser">
      <figure>
        <img
          src="../../../assets/Form-Svg/Rooms-input.svg"
          alt="location pic"
          class="cursor-pointer mx-1"
          width="20"
          height="20"
          @click="x"
        />
      </figure>
    </label>
    <input
      type="text"
      class="py-5 h-10 outline-none mr-1 focus:var(--mainBlue)"
      id="browser"
      placeholder="Where are you going?"
      @click="flipArrow = !flipArrow"
      v-model="searchQuery"
    />

    <img
      src="../../../assets/Form-Svg/arrow-down 1.svg"
      :class="{ fliparrow: flipArrow }"
      alt="arrow"
      @click="x"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
const searchQuery = ref("");
const queryTimeout = ref(null);
const APIKey =
  "pk.eyJ1IjoiYWhhbWR5OTciLCJhIjoiY2xwYWZnZHg4MDdwNDJqcGI4MGdwY2F5YSJ9.dvu-3ApGvQWvYg8_Eb_0Zw";

const mapboxResult = ref(null);
const getSearchResult = () => {
  queryTimeout.value = setTimeout(async () => {
    if (searchQuery.value !== "") {
      const result = await axios.get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchQuery.value}.json?access_token=${APIKey}`
      );
    }
  }, 300);
};

// ////////////////////////////
const flipArrow = ref(false);
const x = function () {
  console.log(data);
  if (data.value) flipArrow.value = true;
};
</script>

<style scoped>
.fliparrow {
  transform: rotate(0.5turn);
}

.destination,
input {
  background-color: #f2f2f2;
  font-size: 13px;
}
</style>
