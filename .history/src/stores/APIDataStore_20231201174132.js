import { defineStore } from "pinia";
import ApiPagination from "../APIFunction/GetPaginatedData";

export const useAPIData = defineStore("APIData", {
  state: () => ({
    hotelSearchData: [],
    realData: [],
    itemsPerPage: 10,
    currentPage: 1,
    realDataForBudget: [],
    metaData: [],
    hotelDetails: [],
    reviewScore: "",
    reviewCount: "",
    hotelDescription: "",
    fixMetaData: [],
    paginationResult: [],
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
      ApiPagination();
    },
    prevPage() {
      this.currentPage--;
      ApiPagination();
    },
  },
});
