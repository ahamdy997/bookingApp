import { defineStore } from "pinia";

export const keepDataAlive = defineStore("keepDataAlive", {
  state: () => ({
    searchQuery: "",
    checkinDate: "",
    checkoutDate: "",
  }),
  actions: {
    updateLocationValue(newData) {
      this.searchQuery = newData;
    },
    updateCheckinDateValue(newDate) {
      this.checkinDate = newDate;
    },
    updateCheckinDateValue(newDate) {
      this.checkinDate = newDate;
    },
  },
});
