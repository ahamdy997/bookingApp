<template>
  <div
    class="location flex destination rounded items-center"
    @click="handleArrow"
  >
    <label for="browser">
      <figure>
        <img
          src="../../../../assets/Form-Svg/Rooms-input.svg"
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
      class="py-5 h-10 outline-none w-10/12"
      id="browser"
      placeholder="Where are you going?"
      @click="flipArrow = !flipArrow"
      v-model="searchQuery"
      @input="getSearchResult"
    />
    <img
      src="../../../../assets/Form-Svg/arrow-down 1.svg"
      alt="arrow"
      width="15"
      height="15"
      class="mr-1"
      :class="{ flipArrow: arr }"
    />
    <Combobox v-model="selectedPerson">
      <ComboboxInput
        @change="query = $event.target.value"
        :displayValue="(person) => person.name"
      />
      <ComboboxOptions>
        <ComboboxOption
          v-for="searchResult in mapboxResult"
          :key="searchResult.id"
          class="py-2 cursor-pointer"
          :ref="inputValue"
          @click="handleInp"
          v-show="searchResult.city_name"
        >
          {{ searchResult.city_name }}
        </ComboboxOption>
      </ComboboxOptions>
    </Combobox>
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
  clearTimeout(queryTimeout.value);
  queryTimeout.value = setTimeout(async () => {
    if (searchQuery.value !== "") {
      const result = await axios.get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchQuery.value}.json?access_token=${APIKey}&type=place`
      );
      mapboxResult.value = result.data.data;
      return;
    }
    mapboxResult.value = null;
  }, 300);

  import { ref, computed } from "vue";
  import {
    Combobox,
    ComboboxInput,
    ComboboxOptions,
    ComboboxOption,
  } from "@headlessui/vue";

  const people = [
    { id: 1, name: "Durward Reynolds", unavailable: false },
    { id: 2, name: "Kenton Towne", unavailable: false },
    { id: 3, name: "Therese Wunsch", unavailable: false },
    { id: 4, name: "Benedict Kessler", unavailable: true },
    { id: 5, name: "Katelyn Rohan", unavailable: false },
  ];
  const selectedPerson = ref(people[0]);
  const query = ref("");

  const filteredPeople = computed(() =>
    query.value === ""
      ? people
      : people.filter((person) => {
          return person.name.toLowerCase().includes(query.value.toLowerCase());
        })
  );
};

// ////////////////////////////
const arr = ref(false);
const handleArrow = function () {
  arr.value = !arr.value;
};
///////////input logic

// const value = ref(null);
// const inputValue = function () {
//   console.log(value.value);
// };
</script>

<style scoped>
.location {
  width: 188px;
}
.flipArrow {
  transform: rotate(180deg);
}
.destination,
input {
  background-color: #f2f2f2;
  font-size: 13px;
}
li {
  border-bottom: solid 1px rgba(214, 214, 214, 1);
}
</style>
