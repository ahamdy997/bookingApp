export const getHotelsData = async (
  cityID,
  indate,
  outdate,
  adultNumber,
  rooms,
  searchQuery,
  inputsAreInvalid
) => {
  const checkBeforeSubmit = function (searchQuery) {
    if (searchQuery === "" || indate === "" || outdate === "") {
      inputsAreInvalid = true;
      return;
    }
  };
  if (!checkBeforeSubmit(cityID, indate, outdate, adultNumber, rooms)) {
    const options = {
      method: "GET",
      url: "https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels",
      params: {
        dest_id: `${cityID}`,
        search_type: "city",
        arrival_date: `${indate}`,
        departure_date: `${outdate}`,
        adults: `${adultNumber || 1}`,
        children_age: "0,17",
        room_qty: `${rooms || 1}`,
        page_number: "1",
        languagecode: "en-us",
        currency_code: "USD",
      },
      headers: {
        "X-RapidAPI-Key": "87d9ed6a55mshd9497d1a515c026p13eb34jsn8b01f10dc615",
        "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      response.data.data.hotels;
    } catch (error) {
      console.error(error);
    }
    return response.data.data.hotels;
  }
};
