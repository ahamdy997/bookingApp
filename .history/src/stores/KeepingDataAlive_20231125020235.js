import { defineStore } from "pinia";

export const useAPIData = defineStore("APIData", {
  state: () => ({
    searchQuery: "",
  }),
  actions: {
    updateInputData(newData) {
      this.searchQuery = newData;
    },
  },
});
