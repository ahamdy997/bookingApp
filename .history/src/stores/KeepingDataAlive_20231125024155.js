import { defineStore } from "pinia";

export const keepDataAlive = defineStore("keepDataAlive", {
  state: () => ({
    searchQuery: "",
    checkinDate: "",
    checkoutDate: "",
    guestNumber: "",
    roomsNumber: "",
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
  },
});

// const dataStore = useAPIData();
// const keepDataAliveStore = keepDataAlive();
// // Keeping Data Alive
// const searchQuery = ref(keepDataAliveStore.searchQuery);
// watch(searchQuery, () => {
//   keepDataAliveStore.updateLocationValue(searchQuery.value);
// });
// const indate = ref(keepDataAliveStore.checkinDate);
// watch(indate, () => {
//   keepDataAliveStore.updateCheckinDateValue(indate.value);
// });

// const outdate = ref(keepDataAliveStore.checkoutDate);
// watch(outdate, () => {
//   keepDataAliveStore.updateCheckoutDateValue(outdate.value);
// });

// const adultNumber = ref(keepDataAliveStore.guestNumber);
// watch(adultNumber, () => {
//   keepDataAliveStore.updateGuestValue(adultNumber.value);
// });

// const rooms = ref(keepDataAliveStore.roomsNumber);
// watch(rooms, () => {
//   keepDataAliveStore.updateRoomsValue(rooms.value);
// });
