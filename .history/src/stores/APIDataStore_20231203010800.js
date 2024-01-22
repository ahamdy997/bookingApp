import { defineStore } from "pinia";

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
    strikethroughPrice: "",
    grossPrice: "",
    myTripImgSrc: "",
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
  displayedPages() {
    const totalPages = this.totalPages;
    const currentPage = this.currentPage;

    let startPage = Math.max(1, currentPage - 1);
    let endPage = Math.min(totalPages, startPage + 2);

    startPage = Math.max(1, endPage - 2);

    return Array.from(
      { length: endPage - startPage + 1 },
      (_, index) => startPage + index
    );
  },
  actions: {

    nextPage() {
      this.currentPage++;
    },
    prevPage() {
      this.currentPage--;
    }, 
       goToPage(pageNumber) {
      if (pageNumber >= 1 && pageNumber <= this.totalPages) {
        this.currentPage = pageNumber;
      }
  },
});
