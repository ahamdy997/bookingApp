<template>
  <main class="w-86 m-auto">
    <!--first section for imgs-->
    <section class="h-[500px] bg-color-secondary f gap-5">
      <div class="inner_div flex w-full justify-between">
        <div class="w-[820px] h-[452px] mt-[48px] mr-[20px]">
          <figure>
            <img
              src="@/assets/hotel-detail-images/Big-pic.png"
              alt="hotel-image"
              class="w-full h-50 mr-5"
            />
          </figure>
        </div>
        <div class="two mt-[48px]">
          <figure>
            <img
              src="@/assets/hotel-detail-images/secondpic.png"
              alt="hotel image"
              class="w-full h-50 block"
            />
          </figure>

          <figure>
            <img
              src="@/assets/hotel-detail-images/thirdPic.png"
              alt="hotel image"
              class="img_three h-50 block"
            />
          </figure>
        </div>
      </div>
    </section>
    <!--secand section for data-->
    <div class="inner_div mt-[50px]">
      <ul class="flex text-par">
        <li>
          <a href="#" class="px-2 border-b-2 border-color-primary p-3"
            >OverView</a
          >
        </li>
        <li>
          <a href="#section2" class="px-2">Rooms</a>
        </li>
      </ul>
    </div>

    <section class="bg-color-secondary mt-2" style="height: 700px">
      <div class="inner_div flex w-full justify-between">
        <div class="one mt-9">
          <h2 class="font-bold text-2xl">Lakeside Motel Warefront</h2>
          <ul class="flex">
            <li><img src="" class="w-5" /></li>
            <li><img src="starOne" class="w-5" /></li>
            <li><img src="starOne" class="w-5" /></li>
            <li><img src="starOne" class="w-5" /></li>
            <li><img src="starTwo" class="w-2.5" /></li>
            <li class="text-sm px-2"><span>4.5 (1200 Reviews)</span></li>
          </ul>
          <p class="flex mt-8 text-sm">
            <span
              ><img
                src="src/assets/images/availableRooms/location 1.svg"
                class="w-5"
            /></span>
            Lorem ipsum road, Tantruim-2322, Melbourne, Australia
          </p>
          <div class="overview bg-white mt-5 h-100 rounded-lg">
            <h3 class="font-bold text-lg p-5">OverView</h3>
            <p class="p-5 text-base border-b-2 border-color-secondary">
              Featuring free WiFi throughout the property, Lakeside Motel
              Waterfront offers accommodations in Lakes Entrance, 19 mi from
              Bairnsdale. Free private parking is available on site.<br />
              <br />Each room at this motel is air conditioned and comes with a
              flat-screen TV. You will find a kettle, toaster and a microwave in
              the room. Each room is fitted with a private bathroom. Guests have
              access to barbecue facilities and a lovely large lawn area. Metung
              is 6.8 mi from Lakeside Motel Waterfront, while Paynesville is 14
              mi from the property.<br /><br />
              Couples in particular like the location – they rated it 9.2 for a
              two-person trip.
            </p>

            <h3 class="font-bold text-lg p-5">Top facilities</h3>
            <div class="flex justify-between w-1/2 pl-5 pb-9">
              <ul class="text-sm">
                <li class="flex pt-1">
                  <img
                    src="src/assets/images/availableRooms/home-wifi 1.svg"
                    class="w-5"
                  /><span class="pl-3">Free wifi</span>
                </li>
                <li class="flex pt-2">
                  <img
                    src="src/assets/images/availableRooms/wind 1.svg"
                    class="w-5"
                  /><span class="pl-3">Air Conditioning</span>
                </li>
                <li class="flex pt-2">
                  <img
                    src="src/assets/images/availableRooms/car 1.svg"
                    class="w-5"
                  /><span class="pl-3">Parking available</span>
                </li>
              </ul>
              <ul class="text-sm">
                <li class="flex pt-1">
                  <img
                    src="src/assets/images/availableRooms/bag-tick-2 1.svg"
                    class="w-5"
                  /><span class="pl-3">Business Services</span>
                </li>
                <li class="flex pt-2">
                  <img
                    src="src/assets/images/availableRooms/lifebuoy 1.svg"
                    class="w-5"
                  /><span class="pl-3">Swimming pool</span>
                </li>
                <li class="flex pt-2">
                  <img
                    src="src/assets/images/availableRooms/like-1 1.svg"
                    class="w-5"
                  /><span class="pl-3">Top rated in area</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="two">
          <div class="mt-9 rounded-lg" style="height: 300px">
            <iframe
              class="rounded-lg"
              width="400"
              height="315"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Rosemont+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
          <h3 class="font-bold text-lg p-5">Explore the area</h3>
          <div class="flex justify-between pl-5 pb-9 text-para">
            <ul class="text-sm">
              <li class="flex pt-1">
                <i class="fa-solid fa-plane-departure"></i>
                <span class="pl-3">Hotel Penselvenyia</span>
              </li>
              <li class="flex pt-2">
                <i class="fa-solid fa-location-pin"></i
                ><span class="pl-3">Travis Bakery store house</span>
              </li>
              <li class="flex pt-2">
                <i class="fa-solid fa-location-pin"></i
                ><span class="pl-3">Olivia Johnson Garden</span>
              </li>
              <li class="flex pt-2">
                <i class="fa-solid fa-location-pin"></i
                ><span class="pl-3">Norman Opera Circus</span>
              </li>
              <li class="flex pt-2">
                <i class="fa-solid fa-location-pin"></i
                ><span class="pl-3">Rockdeset hotel</span>
              </li>
            </ul>
            <ul class="text-sm">
              <li class="flex pt-1">
                <span class="pl-3">2 min drive</span>
              </li>
              <li class="flex pt-2">
                <span class="pl-3">10 min drive</span>
              </li>
              <li class="flex pt-2">
                <span class="pl-3">15 min drive</span>
              </li>
              <li class="flex pt-2">
                <span class="pl-3">20 min drive</span>
              </li>
              <li class="flex pt-2">
                <span class="pl-3">23 min drive</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- available rooms section-->
    <section
      class="bg-color-secondary pb-5"
      style="height: 700px: scroll"
      id="section2"
    >
      <div class="con-rooms m-auto pb-9">
        <h3 class="font-bold text-lg p-5">Available rooms</h3>

        <!-- cards container-->
        <div class="flex flex-wrap justify-between">
          <!-- card 1 -->
          <div class="max-w-md card_one">
            <div class="flex space-between rounded-lg text-white text-lg pic-1">
              <div>
                <p class="flex mt-14">
                  <i class="fa-solid fa-plane-departure pl-5"></i>
                  <span class="pl-2">My DreamPlace</span>
                </p>
                <h2 class="font-bold text-2xl mt-5 ml-5">
                  20% off Use Promotional Coupon Code:
                  <span class="text-ylow">Orlando</span>
                </h2>
              </div>

              <div class="p-4">
                <img
                  src="src/assets/images/availableRooms/tourist (1).png"
                  alt="img of man"
                  class="mt-20"
                />
              </div>
            </div>
          </div>
          <!-- card 2 -->
          <div class="max-w-md card_two bg-white rounded-lg">
            <img :src="cardtwo" alt="cardtwo" />
            <h3 class="font-bold text-lg m-4">
              Standard twin ben, Multiple beds
            </h3>
            <ul class="text-sm ml-4">
              <li class="flex pt-1">
                <img
                  src="src/assets/images/availableRooms/bag-tick-2 1.svg"
                  class="w-5"
                /><span class="pl-3">300 sq ft</span>
              </li>
              <li class="flex pt-2">
                <img
                  src="src/assets/images/availableRooms/lifebuoy 1.svg"
                  class="w-5"
                /><span class="pl-3">Sleeps 3</span>
              </li>
              <li class="flex pt-2">
                <img
                  src="src/assets/images/availableRooms/like-1 1.svg"
                  class="w-5"
                /><span class="pl-3">1 double bed and 1 twin bed</span>
              </li>
            </ul>
            <div class="text-center mt-9">
              <button
                class="bg-color-primary rounded font-sm text-white py-1.5 px-4 md:mt-0 mt-3 w-11/12 btn"
              >
                Reserve suite
              </button>
            </div>
          </div>
          <!-- card 3 -->
          <div class="max-w-md card_two bg-white rounded-lg">
            <img :src="cardthree" alt="cardthree" />
            <h3 class="font-bold text-lg m-4">
              Standard twin ben, Multiple beds
            </h3>
            <ul class="text-sm ml-4">
              <li class="flex pt-1">
                <img
                  src="src/assets/images/availableRooms/bag-tick-2 1.svg"
                  class="w-5"
                /><span class="pl-3">300 sq ft</span>
              </li>
              <li class="flex pt-2">
                <img
                  src="src/assets/images/availableRooms/lifebuoy 1.svg"
                  class="w-5"
                /><span class="pl-3">Sleeps 3</span>
              </li>
              <li class="flex pt-2">
                <img
                  src="src/assets/images/availableRooms/like-1 1.svg"
                  class="w-5"
                /><span class="pl-3">1 double bed and 1 twin bed</span>
              </li>
            </ul>
            <div class="text-center mt-9">
              <button
                class="bg-color-primary rounded font-sm text-white py-1.5 px-4 md:mt-0 mt-3 w-11/12 btn"
              >
                Reserve suite
              </button>
            </div>
          </div>
        </div>
        <!-- warning section -->
        <!-- <WarningSec></WarningSec> -->
      </div>
    </section>
  </main>
</template>

<script>
//   import WarningSec from "../components/WarningSec.vue";
</script>

<style scoped>
body {
  scroll-behavior: smooth;
}

.two {
  width: 400px;
  height: 218px;
}
.img_three {
  margin-top: 16px;
}
.overview {
  width: 810px;
}
.card_one {
  border-radius: 6px;
  background: linear-gradient(180deg, #4796ff 0%, #2366bf 100%);
  width: 400px;
  height: 340px;
  flex-shrink: 0;
}
.card_two {
  width: 400px;
  height: 432px;
  flex-shrink: 0;
}
</style>
