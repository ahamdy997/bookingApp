import { defineStore } from "pinia";

export const useAPIData = defineStore("APIData", {
  state: () => ({
    hotelSearchData: "",
  }),
  actions: {
     getHotelsData : async () => {
    if (searchQuery.value !== "") {
      const options = {
        method: "GET",
        url: "https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels",
        params: {
          dest_id: `${cityID.value}`,
          search_type: "city",
          arrival_date: `${indate.value}`,
          departure_date: `${outdate.value}`,
          adults: `${adultNumber.value || 1}`,
          children_age: "0,17",
          room_qty: `${rooms.value || 1}`,
          page_number: "1",
          languagecode: "en-us",
          currency_code: "USD",
        },
        headers: {
          "X-RapidAPI-Key": "877b28e520mshf1282e0d7767a3ap1b37b6jsnd5321f74ef9c",
          "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
        },
      };
  
      try {
        const response = await axios.request(options);
        console.log(response.data.data.hotels);
        dataStore.hotelSearchData = response.data.data.hotels;
        console.log(dataStore.hotelSearchData.hotels);
      } catch (error) {
        console.error(error);
      }
      return;
    }
  };},
});
