import { defineStore } from "pinia";

export const useAPIData = defineStore("APIData", {
  state: () => ({
    hotelSearchData: [],
    realData: [],
    itemsPerPage: 4,
    currentPage: 1,
    realDataForBudget: [],
    // metaData: [],
  }),
  getters: {
    totalPages() {
      return Math.ceil(this.hotelSearchData.length / this.itemsPerPage);
    },
    paginatedItems() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.hotelSearchData.hotels.slice(startIndex, endIndex);
    },
  },
  actions: {
    nextPage() {
      this.currentPage++;
    },
    prevPage() {
      this.currentPage--;
    },
  },
});
