import { defineStore } from "pinia";

export const useAPIData = defineStore("APIData", {
  state: () => ({
    hotelSearchData: [],
    inputData,:''
  }),
  actions: {
    updateInputData(newData) {
      this.inputData = newData;
    },
  },
});
