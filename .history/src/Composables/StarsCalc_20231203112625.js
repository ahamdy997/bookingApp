import { useAPIData } from "@/stores/APIDataStore";
import { keepDataAlive } from "@/stores/KeepingDataAlive";
import axios from "axios";

const keepDataAliveStore = keepDataAlive();

const dataStore = useAPIData();

const getHotelData = async (hotelID) => {
  // if (searchQuery.value === "" || indate.value === "" || outdate.value === "") {
  //   inputsAreInvalid.value = true;
  //   console.log(checkinDate.value);
  //   return;
  // }

  const options = {
    method: "GET",
    url: "https://booking-com15.p.rapidapi.com/api/v1/hotels/getHotelDetails",
    params: {
      arrival_date: `${keepDataAliveStore.checkinDate}`,
      departure_date: `${keepDataAliveStore.checkoutDate}`,
      adults: `${keepDataAliveStore.guestNumber || 1}`,
      children_age: "0,17",
      room_qty: `${keepDataAliveStore.roomsNumber || 1}`,
      languagecode: "en-us",
      currency_code: "USD",
      hotel_id: `${hotelID}`,
    },
    headers: {
      "X-RapidAPI-Key": "e5ea8a7034msh355f0881f507141p19fb35jsn720bf5e31651",
      "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    dataStore.hotelDetails = response.data.data;
    console.log(dataStore.hotelDetails);
  } catch (error) {
    // inputsAreInvalid.value = true;
    console.error(error.message);
  }
  return;
};

export default getHotelData;
