import { defineStore } from "pinia";

export const keepDataAlive = defineStore("keepDataAlive", {
  state: () => ({
    searchQuery: "",
    checkinDate: "",
  }),
  actions: {
    updateInputData(newData) {
      this.searchQuery = newData;
      this.checkinDate=
    },
  },
});
