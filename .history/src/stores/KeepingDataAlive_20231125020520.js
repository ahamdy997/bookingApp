import { defineStore } from "pinia";

export const keepDataAlive = defineStore("keepDataAlive", {
  state: () => ({
    searchQuery: "",
  }),
  actions: {
    updateInputData(newData) {
      this.searchQuery = newData;
    },
  },
});
