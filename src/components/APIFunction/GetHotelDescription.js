import { useAPIData } from "@/stores/APIDataStore";
import axios from "axios";

const dataStore = useAPIData();

const getHotelData = async (hotelID) => {
  const options = {
    method: "GET",
    url: "https://booking-com15.p.rapidapi.com/api/v1/hotels/getDescriptionAndInfo",
    params: {
      hotel_id: `${hotelID}`,
    },
    headers: {
      "X-RapidAPI-Key": "c00df0398fmsh319e8cc1afd5f99p1c4fdajsn9ac1afe70ae5",
      "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    dataStore.hotelDescription = response.data.data;
  } catch (error) {
    // inputsAreInvalid.value = true;
    console.error(error.message);
  }
  return;
};

export default getHotelData;
