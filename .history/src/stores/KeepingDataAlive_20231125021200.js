import { defineStore } from "pinia";

export const keepDataAlive = defineStore("keepDataAlive", {
  state: () => ({
    searchQuery: "",
    checkinDate: "",
  }),
  actions: {
    updateLocationValue(newData) {
      this.searchQuery = newData;
      this.checkinDate=
    },
  },
});
