import { defineStore } from "pinia";

export const useAPIData = defineStore("APIData", {
  state: () => ({
    hotelSearchData: [],
  }),
});
