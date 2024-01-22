import { defineStore } from "pinia";

export const useAPIData = defineStore("APIData", {
  state: () => ({
    hotelSearchData: [],
  }),
  actions: {
    updateInputData(newData) {
      this.inputData = newData;
    },
  },
});
