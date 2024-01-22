import { defineStore } from "pinia";

export const useAPIData = defineStore("APIData", {
  state: () => ({
    hotelSearchData: [],
    paginatedItems: [],
    itemsPerPage: 5,
    currentPage: 1,
  }),
  getters: {},
});
