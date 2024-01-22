import { defineStore } from "pinia";

export const keepDataAlive = defineStore("keepDataAlive", {
  state: () => ({
    searchQuery: "",
    checkinDate: "",
    checkoutDate: "",
    guestNumber: "",
    roomsNumber: "",
    cityID: "",
  }),
  actions: {
    updateLocationValue(newData) {
      this.searchQuery = newData;
    },
    updateCheckinDateValue(newDate) {
      this.checkinDate = newDate;
    },
    updateCheckoutDateValue(newDate) {
      this.checkoutDate = newDate;
    },
    updateGuestValue(newData) {
      this.guestNumber = newData;
    },
    updateRoomsValue(newData) {
      this.roomsNumber = newData;
    },
    updatecityIDValue(newData) {
      this.cityID = newData;
    },
  },
});
