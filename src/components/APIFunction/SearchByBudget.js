import { useAPIData } from "@/stores/APIDataStore";
import { keepDataAlive } from "@/stores/KeepingDataAlive";
import axios from "axios";

const keepDataAliveStore = keepDataAlive();

const dataStore = useAPIData();

const getAPIFilteredData = async (min, max, sortID, pageNum) => {
  dataStore.currentPage = 1;

  const options = {
    method: "GET",
    url: "https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels",
    params: {
      dest_id: `${keepDataAliveStore.cityID}`,
      search_type: "city",
      arrival_date: `${keepDataAliveStore.checkinDate}`,
      departure_date: `${keepDataAliveStore.checkoutDate}`,
      adults: `${keepDataAliveStore.guestNumber || 1}`,
      children_age: "0,17",
      room_qty: `${keepDataAliveStore.roomsNumber || 1}`,
      page_number: `${pageNum || "1"}`,
      languagecode: "en-us",
      currency_code: "USD",
      price_min: `${min || ""}`,
      price_max: `${max || ""}`,
      sort_by: `${sortID || ""}`,
    },
    headers: {
      "X-RapidAPI-Key": "c00df0398fmsh319e8cc1afd5f99p1c4fdajsn9ac1afe70ae5",
      "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    dataStore.hotelSearchData = response.data.data.hotels;
    dataStore.realData = response.data.data.hotels;
    dataStore.metaData = response.data.data.meta;
  } catch (error) {
    console.error(error.message);
  }
  return;
};

export default getAPIFilteredData;
