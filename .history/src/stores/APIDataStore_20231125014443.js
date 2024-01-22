import { defineStore } from "pinia";

export const useAPIData = defineStore("APIData", {
  state: () => ({
    hotelSearchData: [],
    searchQuery: "",
  }),
  actions: {
    updateInputData(newData) {
      this.searchQuery = newData;
    },
  },
});
