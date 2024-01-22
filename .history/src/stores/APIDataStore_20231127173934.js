import { defineStore } from "pinia";

export const useAPIData = defineStore("APIData", {
  state: () => ({
    hotelSearchData: [],
    itemsPerPage: 4,
    currentPage: 1,
  }),
  getters: {
    totalPages() {
      return Math.ceil(this.hotelSearchData.length / this.itemsPerPage);
    },
  },
  actions: {
    nextPage() {
      this.currentPage++;
    },
    prevPage() {
      this.currentPage--;
    },
    paginatedItems() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.hotelSearchData.slice(startIndex, endIndex);
    },
  },
});
