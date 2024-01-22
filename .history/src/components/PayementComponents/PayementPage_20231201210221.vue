<template>
  <transition>
    <teleport to="body">
      <transition name="modal">
        <base-dialog v-if="inputsAreInvalid" @close="closeDialog">
          <template v-slot:default>
            <div
              class="p-5 flex rounded-[10px] justify-center flex-col items-center im m-auto w-[240px] bg-[rgba(111, 207, 151, 0.20)]"
            >
              <img
                src="../../assets/payement-page-images/image 11.png"
                alt="successful"
              />
            </div>
            <h2 class="mt-[45px] text-center">Booking Successful</h2>
            <p class="text-[rgba(79, 79, 79, 1)]">
              Congratulations your reservation has been made. You will be
              notified 2 days prior the date.
            </p>
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
  <section>
    <form>
      <div class="flex items-center w-86 m-auto justify-between h-[68px]">
        <the-logo></the-logo>
        <navbar-links></navbar-links>
        <navbar-user></navbar-user>
      </div>
      <section class="bg-[#efefef]">
        <div class="w-86 mx-auto">
          <div class="m-auto overflow-hidden">
            <h2 class="text-3xl mt-[60px] font-bold">
              Secure your reservation
            </h2>
            <covid-warning
              class="w-full mt-[40px] mb-[40px] mt-5"
            ></covid-warning>
          </div>
          <div class="flex w-full justify-between m-auto">
            <div class="left">
              <div class="one bg-white rounded-lg w-[810px] h-80">
                <div class="w-full h-16 text-white rounded-lg">
                  <div
                    class="flex items-center bg-[var(--mainBlue)] w-[810px] h-[60px] rounded-t-md text-lg"
                  >
                    <img
                      src="../../assets/payement-page-images/security-guard.svg"
                      alt="security-guard"
                      class="ml-5 mr-4"
                    />
                    <p>Room 1</p>
                    <p class="ml-[18px]">
                      2 adults, 1 double bed and 1 twin bed, Non-smoking
                    </p>
                  </div>
                </div>
                <!--form-->

                <div class="max-w-sm mt-10 ml-8">
                  <div class="flex justify-around">
                    <div class="mb-5 mr-5">
                      <label
                        for="firstName"
                        class="block mb-2 text-sm text-gray-900 font-bold"
                        >First Name</label
                      >
                      <input
                        type="text"
                        id="firstName"
                        class="bg-color-secondary border outline-none border-color-secondary focus:border focus:border-[var(--mainBlue)] text-gray-900 text-sm rounded-lg focus:bg-white mr-4 w-full p-2.5 dark:placeholder-gray-400"
                        placeholder="First Name"
                        required
                      />
                    </div>
                    <div class="mb-5">
                      <label
                        for="lastName"
                        class="block mb-2 text-sm text-gray-900 font-bold"
                        >Last Name</label
                      >
                      <input
                        type="text"
                        id="lastName"
                        class="bg-color-secondary border outline-none border-color-secondary focus:border focus:border-[var(--mainBlue)] text-gray-900 text-sm rounded-lg focus:bg-white mr-4 w-full p-2.5 dark:placeholder-gray-400"
                        placeholder="Last Name"
                        required
                      />
                    </div>
                  </div>
                  <label class="block mb-2 text-sm text-gray-900 font-bold"
                    >Phone number</label
                  >

                  <div class="flex justify-between">
                    <div class="drop w-3/12">
                      <!-- Dropdown menu -->
                      <div>
                        <div
                          class="bg-[#efefef] flex justify-between w-[126px] items-center rounded relative"
                        >
                          <!-- Dropdown toggle button -->
                          <div
                            class="flex items-center p-2 text-gray-900 bg-color-secondary rounded-md w-24"
                          >
                            <span class="flex justify-between">
                              <img
                                src="../../assets/payement-page-images/country.png"
                              />
                              <span class="ml-4">+61</span>
                            </span>
                          </div>
                          <img
                            class="w-5 mr-3 h-5 text-gray-900 dark:text-white"
                            src="../../assets/Form-Svg/arrow-down 1.svg"
                            width="20"
                            height="20"
                          />

                          <!-- Dropdown menu -->
                        </div>
                      </div>
                    </div>
                    <div class="bg-[#efefef ] mb-5 w-8/12">
                      <input
                        type="number"
                        id="phone"
                        class="border-color-secondary border outline-none focus:border focus:border-[var(--mainBlue)] text-gray-900 text-sm rounded-lg focus:bg-white w-full p-2.5 dark:placeholder-gray-400"
                        placeholder="88672778"
                        required
                      />
                    </div>
                  </div>
                  <div class="flex items-start mb-5">
                    <div class="flex items-center h-5">
                      <input
                        id="remember"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                        required
                      />
                    </div>
                    <label
                      for="remember"
                      class="ms-2 text-sm text-gray-900 dark:text-gray-300"
                      >Receive text alerts about this trip.</label
                    >
                  </div>
                </div>
              </div>
              <div class="bg-white rounded-lg w-[810px] mt-9">
                <div class="w-full bg-color-primary h-16 text-white rounded-lg">
                  <div
                    class="flex items-center bg-[var(--mainBlue)] w-[810px] h-[60px] rounded-t-md top-4 text-lg"
                  >
                    <img
                      src="../../assets/payement-page-images/card-tick 1.svg"
                      alt="card thick"
                      class="ml-5"
                    />
                    <p class="py-1 px-4">Payment options</p>
                  </div>
                </div>
                <div class="border-b-2 border-color-secondary">
                  <p
                    class="mt-6 ml-5 border-b-[3px] border-[var(--mainBlue)] w-32 py-2"
                  >
                    Debit/Credit Card
                  </p>
                </div>
                <div class="visa_Types w-1/2 flex items-center ml-4 mt-7">
                  <div
                    class="visa bg-[#efefef] w-20 h-10 rounded-md text-center cursor-pointer"
                  >
                    <img
                      src="../../assets/payement-page-images/image 6.png"
                      alt="visa"
                      class="m-auto mt-2"
                    />
                  </div>
                  <div
                    class="visa bg-[#efefef] w-20 h-10 rounded-md flex items-center text-center ml-2 cursor-pointer"
                  >
                    <img
                      src="../../assets/payement-page-images/image 7.png"
                      alt="visa"
                      class="m-auto"
                    />
                  </div>
                  <div
                    class="visa bg-[#efefef] w-20 flex items-center h-10 rounded-md text-center ml-2 cursor-pointer"
                  >
                    <img
                      src="../../assets/payement-page-images/image 10.png"
                      alt="visa"
                      class="m-auto"
                    />
                  </div>
                  <div
                    class="visa bg-[#efefef] w-20 h-10 flex items-center rounded-md text-center ml-2 cursor-pointer"
                  >
                    <img
                      src="../../assets/payement-page-images/image 8.png"
                      alt="visa"
                      class="m-auto mt-3"
                    />
                  </div>
                </div>
                <div>
                  <div class="mb-5 w-1/2 ml-4 mt-7">
                    <label
                      for="firstName"
                      class="block mb-2 text-sm text-gray-900 font-bold"
                      >Name on card</label
                    >
                    <div class="flex">
                      <input
                        type="text"
                        id="firstName"
                        class="bg-color-secondary outline-none border border-color-secondary focus:border focus:border-[var(--mainBlue)] text-gray-900 text-sm rounded-lg focus:bg-white block w-full p-2.5 dark:placeholder-gray-400"
                        placeholder="your Name"
                        required
                      />
                    </div>
                  </div>
                  <div class="mb-5 w-1/2 ml-4 mt-7">
                    <label
                      for="firstName"
                      class="block mb-2 text-sm text-gray-900 font-bold"
                      >Debit/Credit card number</label
                    >
                    <div class="flex">
                      <input
                        type="number"
                        id="visaNumber"
                        class="bg-color-secondary outline-none border border-color-secondary focus:border focus:border-[var(--mainBlue)] text-gray-900 text-sm rounded-lg focus:bg-white block w-full p-2.5 dark:placeholder-gray-400"
                        placeholder="9923464374822293"
                        required
                      />
                    </div>
                  </div>
                  <div class="flex ml-4 mt-7">
                    <div class="mb-5">
                      <label class="block mb-2 text-sm text-gray-900 font-bold"
                        >Security Code</label
                      >
                      <input
                        type="number"
                        id="firstName"
                        class="bg-color-secondary outline-none border border-color-secondary focus:border focus:border-[var(--mainBlue)] text-gray-900 text-sm rounded-lg focus:bg-white block w-full p-2.5 dark:placeholder-gray-400"
                        placeholder="456"
                        required
                      />
                    </div>
                    <div class="mb-5 ml-3">
                      <label class="block mb-2 text-sm text-gray-900 font-bold"
                        >Billing Zip code</label
                      >
                      <div class="flex">
                        <input
                          type="number"
                          id="lastName"
                          class="bg-color-secondary outline-none border border-color-secondary focus:border focus:border-[var(--mainBlue)] text-gray-900 text-sm rounded-lg focus:bg-white w-full p-2.5 dark:placeholder-gray-400"
                          placeholder="203846"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="bg-white rounded-lg w-[810px] mt-9 mb-[141px] pb-4">
                <div class="w-full bg-yoyo h-16 text-white rounded-lg">
                  <div
                    class="w-[810px] h-[60px] bg-[#F2C94C] rounded-t-md flex items-center text-lg text-para"
                  >
                    <p class="py-1 px-4 text-black">
                      Important information about your booking
                    </p>
                  </div>
                </div>
                <ol class="w-3/4 mt-7 ml-10 list-decimal leading-7">
                  <li>
                    This rate is non-refundable. If you change or cancel your
                    booking you will not get a refund or credit to use for a
                    future stay.
                  </li>

                  <li>Stay extensions will require a new reservation.</li>

                  <li>Front desk staff will greet guests on arrival .</li>
                  <li>
                    No refunds will be issued for late check-in or early
                    check-out.
                  </li>
                </ol>
                <p class="w-3/4 mt-4 ml-7">
                  By clicking the button below, I acknowledge that I have
                  reviewed the Privacy Statement and have reviewd and accept the
                  Rules and Restrictions and Terms of Use.
                </p>
                <button
                  class="ml-7 mt-6 px-4 py-2 tracking-wide text-white bg-[var(--mainBlue)] rounded-md"
                  @click="inputsAreInvalid = true"
                >
                  Complete Booking
                </button>
                <div class="flex ml-7 mt-6">
                  <img
                    src="../../assets/payement-page-images/lock-circle 1.svg"
                    alt="lock"
                  />
                  <p class="mx-1">
                    We use secure transmission and encrypted storage to protect
                    your personal information
                  </p>
                </div>
              </div>
            </div>
            <div class="right">
              <div class="first bg-white rounded-md pb-4">
                <img
                  src="../../assets/hotel-detail-images/secondpic.png"
                  alt="”Image”"
                  class="w-full h-50 block"
                />
                <h2 class="font-bold text-2xl ml-5 mt-5">
                  Lakeside Motel Warefront
                </h2>
                <ul class="flex ml-5">
                  <li>
                    <img
                      src="../../assets/Stars-for-Search-page/star-s-fill.svg"
                      class="w-5"
                    />
                  </li>
                  <li>
                    <img
                      src="../../assets/Stars-for-Search-page/star-s-fill.svg"
                      class="w-5"
                    />
                  </li>
                  <li>
                    <img
                      src="../../assets/Stars-for-Search-page/star-s-fill.svg"
                      class="w-5"
                    />
                  </li>
                  <li>
                    <img
                      src="../../assets/Stars-for-Search-page/star-s-fill.svg"
                      class="w-5"
                    />
                  </li>

                  <li class="text-sm px-2"><span>4.0 (1200 Reviews)</span></li>
                </ul>
                <ul class="ml-5 mt-5 leading-7">
                  <li class="text-[red]">Non refundable</li>
                  <li>Check in: Sunday, March 18, 2022</li>
                  <li>Check out: Tuesday, March 20, 2022</li>
                  <li>2 night stay</li>
                </ul>
              </div>
              <div class="bg-white rounded-md pb-4 mt-10">
                <div
                  class="w-full bg-[#85E0AB] flex items-center h-16 rounded-t-lg"
                >
                  <p class="ml-[18px] font-medium text-[#000] text-xl">
                    Price Details
                  </p>
                </div>
                <div class="flex justify-between ml-5 mt-5 w-3/4">
                  <p>1 room X 2 nights</p>
                  <p>$ 120.32</p>
                </div>
                <div class="flex justify-between ml-5 mt-5 w-3/4">
                  <p>Tax and service fees</p>
                  <p>$ 8.32</p>
                </div>
                <div
                  class="border-b-2 border-color-secondary w-full mt-5"
                ></div>
                <div
                  class="flex justify-between ml-5 mt-5 w-3/4 font-bold text-xl"
                >
                  <p>Total</p>
                  <p>$ 130</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </form>
  </section>
</template>

<script setup>
import CovidWarning from "../../components/HomeComponents/CovidWarning/CovidWarning.vue";
import TheLogo from "../TheNavbar/TheLogo.vue";
import NavbarLinks from "../TheNavbar/NavbarLinks.vue";
import NavbarUser from "../TheNavbar/NavbarUser.vue";
import BaseDialog from "../BaseDialog/BaseDialog.vue";
import { ref } from "vue";

const inputsAreInvalid = ref(false);

const closeDialog = function () {
  inputsAreInvalid.value = false;
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
.im {
  background-color: rgba(111, 207, 151, 0.2);
}
</style>
