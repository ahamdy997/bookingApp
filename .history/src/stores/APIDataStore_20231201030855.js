import { defineStore } from "pinia";

export const useAPIData = defineStore("APIData", {
  state: () => ({
    hotelSearchData: [],
    realData: [],
    itemsPerPage: 20,
    currentPage: 1,
    realDataForBudget: [],
    metaData: [],
    hotelDetails: [],
    reviewScore: "",
    reviewCount: "",
    hotelDescription: "",
  }),
  getters: {
    totalPages() {
      return Math.ceil(parseInt(this.metaData[0]?.title) / this.itemsPerPage);
    },
    paginatedItems() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.hotelSearchData.slice(startIndex, endIndex);
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
