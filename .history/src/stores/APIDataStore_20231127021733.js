import { defineStore } from "pinia";

export const useAPIData = defineStore("APIData", {
  state: () => ({
    hotelSearchData: [],
    itemsPerPage: 5,
    currentPage: 2,
  }),
  getters: {
    totalPages() {
      Math.ceil(this.hotelSearchData.length / this.itemsPerPage);
    },
    paginatedItems() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.hotelSearchData.slice(startIndex, endIndex);
    },
  },
  actions: {
    nextPage() {
      console.log(this.paginatedItems);
      console.log(this.hotelSearchData);
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
  },
});
