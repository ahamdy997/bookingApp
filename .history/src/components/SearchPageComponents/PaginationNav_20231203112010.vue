<template></template>

<script setup>
// paginationClickHandling and bg color of span
const paginationClickHandling = function (num, index, event) {
  useAPIDataStore.currentPage = num;
  if (num === index + 1) event.target.classList.add("bg");
  if (Number(num) % 2 == 0 || num == 2) {
    ApiPagination(num);
    console.log(useAPIDataStore.paginationResult);
    console.log(num);
  } else {
    useAPIDataStore.hotelSearchData = useAPIDataStore.hotelSearchData.concat(
      useAPIDataStore.paginationResult
    );
    console.log(useAPIDataStore.hotelSearchData);
  }
};
</script>

<style lang="scss" scoped></style>
