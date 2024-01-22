<template>
  <transition>
    <teleport to="body">
      <transition name="modal">
        <base-dialog
          v-if="inputsAreInvalid"
          title="Invalid Inputs"
          @close="closeDialog"
        >
          <template v-slot:default>
            <p v-if="!searchQuery">
              Where are you going field is required, please fill it
            </p>
            <p class="text-center">{{ checkinDate }}</p>
            <p class="text-center">{{ checkoutDate }}</p>
          </template>

          <template v-slot:actions>
            <button
              @click="closeDialog"
              class="px-3 py-2.5 text-white bg-[var(--mainBlue)] w-32 search"
            >
              Close
            </button>
          </template>
        </base-dialog>
      </transition>
    </teleport>
  </transition>
  <form class="flex items-center justify-evenly gap-1 h-full flex">
    <div class="flex items-center rounded">
      <div class="gap-3 flex">
        <!--///////////////////////////////////////////////////////////////////////////////////  -->
        <div
          class="location flex destination rounded items-center"
          @click="handleArrow"
        >
          <label for="browser">
            <figure>
              <img
                src="../../../assets/Form-Svg/Rooms-input.svg"
                alt="location pic"
                class="cursor-pointer mx-1"
                width="20"
                height="20"
              />
            </figure>
          </label>
          <input
            type="text"
            class="py-5 h-10 outline-none w-10/12"
            id="browser"
            placeholder="Where are you going?"
            @click="locationSearch"
            v-model="searchQuery"
            autocomplete="off"
          />
          <img
            src="../../../assets/Form-Svg/arrow-down 1.svg"
            alt="arrow"
            width="15"
            height="15"
            class="mr-1"
            :class="{ flipArrow: arr }"
          />
          <ul
            class="absolute text-black w-[190px] rounded-lg shadow-md pt-2 px-1 top-[67px] bg-[#f2f2f2]"
            v-show="mapboxResult && arr"
          >
            <li
              v-for="searchResult in mapboxResult"
              :key="searchResult.dest_id"
              class="py-2 cursor-pointer text-center"
              :ref="inputValue"
              @click="handleInp(searchResult.city_name, searchResult.dest_id)"
              v-show="searchResult.city_name"
            >
              {{ searchResult.city_name }}
            </li>
          </ul>
        </div>
        <!-- //////////////////////////////////////////////// -->
        <div class="checkin flex destination rounded items-center">
          <label for="checkinDate">
            <figure>
              <img
                src="../../../assets/Form-Svg/calendar.svg"
                alt=" Calendar pic"
                class="cursor-pointer mx-1"
                width="20"
                height="20"
              />
            </figure>
          </label>
          <div class="w-40">
            <VueDatePicker
              v-model="indate"
              placeholder="Check in date"
              id="checkinDate"
              format="MM-dd-yyyy"
              value-format="MM-dd-yyyy"
              :enable-time-picker="false"
              model-type="yyyy-MM-dd"
              :min-date="new Date(new Date().valueOf() + 1000 * 3600 * 24)"
            >
            </VueDatePicker>
          </div>
        </div>
        <!-- /////////////////////////////////////////////////////// -->
        <div class="checkout flex destination rounded items-center">
          <label for="checkoutDate">
            <figure>
              <img
                src="../../../assets/Form-Svg/calendar.svg"
                alt=" Calendar pic"
                class="cursor-pointer mx-1"
                width="20"
                height="20"
              />
            </figure>
          </label>
          <div class="w-40">
            <VueDatePicker
              v-model="outdate"
              placeholder="Check out date"
              id="checkoutDate"
              format="MM-dd-yyyy"
              value-format="MM-dd-yyyy"
              :enable-time-picker="false"
              model-type="yyyy-MM-dd"
              :min-date="new Date(new Date().valueOf() + 2000 * 3600 * 24)"
            ></VueDatePicker>
          </div>
        </div>

        <!-- ////////////////////////////////////////////////////////////// -->
        <div class="guests flex destination rounded items-center">
          <label for="guests">
            <figure>
              <img
                src="../../../assets/Form-Svg/user-guests.svg"
                alt=" Guest Person"
                class="cursor-pointer mx-1 mr-2.5"
                width="20"
                height="20"
              />
            </figure>
          </label>
          <input
            class="py-5 h-10 outline-none w-10/12"
            type="text"
            id="guests"
            placeholder="Guests"
            v-model="adultNumber"
            autocomplete="off"
          />
        </div>
        <!-- /////////////////////////////////////////////////// -->
        <div class="room flex destination rounded items-center">
          <label for="room">
            <figure>
              <img
                src="../../../assets/Form-Svg/Rooms-input.svg"
                alt=" Bed Pic"
                class="cursor-pointer mx-1"
                width="20"
                height="20"
              />
            </figure>
          </label>
          <input
            class="py-5 h-10 outline-none w-10/12"
            type="text"
            id="room"
            placeholder="Room"
            v-model="rooms"
            autocomplete="off"
          />
        </div>
      </div>
    </div>

    <button
      type="button"
      class="px-3 py-2.5 text-white w-32 search"
      @click="getHotelsData"
    >
      Search
    </button>
  </form>
</template>

<script setup>
// ////Imports And Store defines////////
import { ref, onMounted, watch, computed } from "vue";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { useAPIData } from "@/stores/APIDataStore";
import { keepDataAlive } from "@/stores/KeepingDataAlive";
import axios from "axios";
import router from "@/router";

const dataStore = useAPIData();
const keepDataAliveStore = keepDataAlive();

// //////Keeping Data Alive///////////
const searchQuery = ref(keepDataAliveStore.searchQuery);
watch(searchQuery, () => {
  keepDataAliveStore.updateLocationValue(searchQuery.value);
});
const indate = ref(keepDataAliveStore.checkinDate);
watch(indate, () => {
  keepDataAliveStore.updateCheckinDateValue(indate.value);
});

const outdate = ref(keepDataAliveStore.checkoutDate);
watch(outdate, () => {
  keepDataAliveStore.updateCheckoutDateValue(outdate.value);
});

const adultNumber = ref(keepDataAliveStore.guestNumber);
watch(adultNumber, () => {
  keepDataAliveStore.updateGuestValue(adultNumber.value);
});

const rooms = ref(keepDataAliveStore.roomsNumber);
watch(rooms, () => {
  keepDataAliveStore.updateRoomsValue(rooms.value);
});
const cityID = ref(keepDataAliveStore.cityID);
watch(cityID, () => {
  keepDataAliveStore.updateCityIdValue(cityID.value);
});

///////////////////////////////storing Data in Session Storage to fix reload data//////////
const SearchFormData = function () {
  const searchForm = {
    searchName: keepDataAliveStore.searchQuery,
    searchInDate: keepDataAliveStore.checkinDate,
    searchOutDate: keepDataAliveStore.checkoutDate,
    searchAdultNumber: keepDataAliveStore.guestNumber,
    searchRoomNumber: keepDataAliveStore.roomsNumber,
    searchCityID: keepDataAliveStore.cityID,
  };
  sessionStorage.setItem("SearchFormData", JSON.stringify(searchForm));
};
////////////get item after reload//////////////
onMounted(() => {
  const loadObject = JSON.parse(sessionStorage.getItem("SearchFormData"));
  if (loadObject) {
    searchQuery.value = loadObject.searchName;
    indate.value = loadObject.searchInDate;
    outdate.value = loadObject.searchOutDate;
    adultNumber.value = loadObject.searchAdultNumber;
    rooms.value = loadObject.searchRoomNumber;
    cityID.value = loadObject.searchCityID;
  }
});

// //////////////////////get hotel destination City and ID From API/////////////////////////////////
const mapboxResult = ref(null);

onMounted(async () => {
  const options = {
    method: "GET",
    url: "https://booking-com15.p.rapidapi.com/api/v1/hotels/searchDestination",
    params: { query: "egypt", type: "city" },
    headers: {
      "X-RapidAPI-Key": "c00df0398fmsh319e8cc1afd5f99p1c4fdajsn9ac1afe70ae5",
      "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    mapboxResult.value = response.data.data;
  } catch (error) {
    console.error(error);
  }
  return;
});

/////////////////////Location Logic////////////////////
const inputValue = ref("");
const arr = ref(false);
const locationSearch = function () {
  arr.value = !arr.value;
};
const handleInp = function (city, id) {
  searchQuery.value = city;
  cityID.value = id;
  arr.value = !arr.value;
};

//////////////////////////////Dates Validation Logic///////////////////////////

const checkinDate = computed(() => {
  const day = new Date().getDate();
  const month = new Date().getMonth() + 1;
  const year = new Date().getFullYear();
  const todayDate = Number(`${year}${month}${day}`);

  if (todayDate >= +indate.value.replaceAll("-", "")) {
    return "Check in Date Can't be today or in the past, please check your input again";
  }
});

const checkoutDate = computed(() => {
  if (+indate.value.replaceAll("-", "") >= +outdate.value.replaceAll("-", "")) {
    return "Check out Date Can't be before or equal check in date, please check your input again";
  }
});
////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////// Show Modal Validation Errors//////////////////////////////
const inputsAreInvalid = ref(false);

const closeDialog = function () {
  inputsAreInvalid.value = false;
};
///////////////////////////Check Data Is Valid Before Calling API /////////////////////////////////

const checkExp = function () {
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const day = new Date().getDate();
  const hour = new Date().getHours();
  const minutes = new Date().getMinutes();
  return `${year}${month}${day}${hour}${minutes}`;
};
// check on mounted for exp date

// Call Api and Check Data

const getHotelsData = async () => {
  dataStore.currentPage === 1;
  if (!searchQuery.value) {
    inputsAreInvalid.value = true;
    return;
  }

  // check if account signed in or his
  SearchFormData();
  if (
    !JSON.parse(localStorage.getItem("user")) ||
    +checkExp() - +JSON.parse(localStorage.getItem("user")).date > 100
  ) {
    localStorage.removeItem("user");
    router.push({ name: "sign-in" });
  } else {
    router.push({ name: "search" });

    ///////Calling API
    const options = {
      method: "GET",
      url: "https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels",
      params: {
        dest_id: `${cityID.value}`,
        search_type: "city",
        arrival_date: `${keepDataAliveStore.checkinDate}`,
        departure_date: `${keepDataAliveStore.checkoutDate}`,
        adults: `${keepDataAliveStore.guestNumber || 1}`,
        children_age: "0,17",
        room_qty: `${keepDataAliveStore.roomsNumber || 1}`,
        page_number: "1",
        languagecode: "en-us",
        currency_code: "USD",
      },
      headers: {
        "X-RapidAPI-Key": "c00df0398fmsh319e8cc1afd5f99p1c4fdajsn9ac1afe70ae5",
        "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      if (response.data.data.hotels) {
        dataStore.hotelSearchData = response.data.data.hotels;
        dataStore.realData = response.data.data.hotels;
        dataStore.realDataForBudget = response.data.data.hotels;
        dataStore.metaData = response.data.data.meta;
      }
    } catch (error) {
      console.error(error.message);
    }
    return;
  }
};
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: all 0.25s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: scale(1.1);
}
.destination,
input {
  background-color: #f2f2f2;
  font-size: 13px;
}
.search {
  border-radius: 6px;
  background-color: var(--mainBlue);
}

.location {
  width: 188px;
}
.flipArrow {
  transform: rotate(180deg);
}
img {
  transition: all 0.2s;
}
li {
  border-bottom: solid 1px rgba(214, 214, 214, 1);
}
</style>

<!-- Date Picker Style -->
<style>
.dp__pointer {
  background-color: #f2f2f2;
  border: none;
  padding-inline: 4px;
  font-size: 13px;
}
.dp__active_date {
  color: #fff;
  background-color: var(--mainBlue);
  border-radius: 50%;
}
.dp__action_select {
  background-color: var(--mainBlue) !important;
}

svg {
  visibility: hidden;
}

.dp__pointer::placeholder {
  color: gray;
  font-family: work sans;
}
</style>
