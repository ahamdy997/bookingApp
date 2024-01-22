<template>
  <form class="flex items-center justify-around gap-1 h-full flex">
    <div class="destination flex items-center rounded">
      <label for="destination-name">
        <svg
          class="cursor-pointer mx-1"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0
      20 20"
          fill="none"
        >
          <path
            d="M9.9999 11.1917C10.3413 11.1917 10.6794 11.1244 10.9949 10.9938C11.3103 10.8631 11.5969 10.6716 11.8384 10.4302C12.0798 10.1887 12.2713 9.90212 12.402 9.58668C12.5327 9.27123 12.5999 8.93314 12.5999 8.5917C12.5999 8.25026 12.5327 7.91217 12.402 7.59672C12.2713 7.28128 12.0798 6.99465 11.8384 6.75322C11.5969 6.51179 11.3103 6.32027 10.9949 6.18961C10.6794 6.05895 10.3413 5.9917 9.9999 5.9917C9.31034 5.9917 8.64902 6.26563 8.16142 6.75322C7.67383 7.24082 7.3999 7.90214 7.3999 8.5917C7.3999 9.28126 7.67383 9.94258 8.16142 10.4302C8.64902 10.9178 9.31034 11.1917 9.9999 11.1917V11.1917Z"
            stroke="#828282"
            stroke-width="1.5"
          />
          <path
            d="M3.01675 7.07508C4.65842 -0.141583 15.3501 -0.13325 16.9834 7.08342C17.9417 11.3168 15.3084 14.9001 13.0001 17.1168C12.1935 17.8947 11.1165 18.3294 9.99592 18.3294C8.87529 18.3294 7.79835 17.8947 6.99175 17.1168C4.69175 14.9001 2.05842 11.3084 3.01675 7.07508V7.07508Z"
            stroke="#828282"
            stroke-width="1.5"
          />
        </svg>
      </label>
      <input
        class="py-5 h-10 outline-none"
        type="text"
        id="destination-name"
        placeholder="Where are you going?"
      />
    </div>

    <div class="destination flex items-center rounded">
      <label for="date">
        <svg
          class="cursor-pointer mx-1"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M6.6665 1.66675V4.16675"
            stroke="#828282"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13.3335 1.66675V4.16675"
            stroke="#828282"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M2.9165 7.5752H17.0832"
            stroke="#828282"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17.5 7.08341V14.1667C17.5 16.6667 16.25 18.3334 13.3333 18.3334H6.66667C3.75 18.3334 2.5 16.6667 2.5 14.1667V7.08341C2.5 4.58341 3.75 2.91675 6.66667 2.91675H13.3333C16.25 2.91675 17.5 4.58341 17.5 7.08341Z"
            stroke="#828282"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13.0791 11.4167H13.0866"
            stroke="#828282"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13.0791 13.9167H13.0866"
            stroke="#828282"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.99561 11.4167H10.0039"
            stroke="#828282"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.99561 13.9167H10.0039"
            stroke="#828282"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6.91162 11.4167H6.91995"
            stroke="#828282"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6.91162 13.9167H6.91995"
            stroke="#828282"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </label>
      <input
        class="py-5 h-10 outline-none"
        type="text"
        id="date"
        placeholder="Check in date"
      />
    </div>

    <div class="destination flex items-center rounded">
      <label for="checkout-date">
        <svg
          class="cursor-pointer mx-1"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M6.6665 1.66675V4.16675"
            stroke="#828282"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13.3335 1.66675V4.16675"
            stroke="#828282"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M2.9165 7.5752H17.0832"
            stroke="#828282"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17.5 7.08341V14.1667C17.5 16.6667 16.25 18.3334 13.3333 18.3334H6.66667C3.75 18.3334 2.5 16.6667 2.5 14.1667V7.08341C2.5 4.58341 3.75 2.91675 6.66667 2.91675H13.3333C16.25 2.91675 17.5 4.58341 17.5 7.08341Z"
            stroke="#828282"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13.0791 11.4167H13.0866"
            stroke="#828282"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13.0791 13.9167H13.0866"
            stroke="#828282"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.99561 11.4167H10.0039"
            stroke="#828282"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.99561 13.9167H10.0039"
            stroke="#828282"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6.91162 11.4167H6.91995"
            stroke="#828282"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6.91162 13.9167H6.91995"
            stroke="#828282"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </label>
      <input
        class="py-5 h-10 outline-none"
        type="text"
        id="checkout-date"
        placeholder="Check out date"
      />
    </div>

    <div class="destination flex items-center rounded">
      <label for="guests">
        <svg
          class="cursor-pointer mx-1"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <g clip-path="url(#clip0_245_70)">
            <path
              d="M15.1166 18.0168C14.3833 18.2335 13.5166 18.3335 12.5 18.3335H7.49997C6.4833 18.3335 5.61663 18.2335 4.8833 18.0168C5.06663 15.8502 7.29163 14.1418 9.99997 14.1418C12.7083 14.1418 14.9333 15.8502 15.1166 18.0168V18.0168Z"
              stroke="#828282"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12.4998 1.66675H7.49984C3.33317 1.66675 1.6665 3.33341 1.6665 7.50008V12.5001C1.6665 15.6501 2.6165 17.3751 4.88317 18.0167C5.0665 15.8501 7.2915 14.1417 9.99984 14.1417C12.7082 14.1417 14.9332 15.8501 15.1165 18.0167C17.3832 17.3751 18.3332 15.6501 18.3332 12.5001V7.50008C18.3332 3.33341 16.6665 1.66675 12.4998 1.66675ZM9.99984 11.8084C8.34984 11.8084 7.0165 10.4667 7.0165 8.81675C7.0165 7.16675 8.34984 5.83341 9.99984 5.83341C11.6498 5.83341 12.9832 7.16675 12.9832 8.81675C12.9832 10.4667 11.6498 11.8084 9.99984 11.8084Z"
              stroke="#828282"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12.9833 8.81683C12.9833 10.4668 11.6499 11.8085 9.99993 11.8085C8.34993 11.8085 7.0166 10.4668 7.0166 8.81683C7.0166 7.16683 8.34993 5.8335 9.99993 5.8335C11.6499 5.8335 12.9833 7.16683 12.9833 8.81683Z"
              stroke="#828282"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_245_70">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </label>
      <input
        class="py-5 h-10 outline-none"
        type="text"
        id="guests"
        placeholder="Guests"
      />
    </div>

    <div class="destination flex items-center rounded">
      <label for="room">
        <svg
          class="cursor-pointer mx-1"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M7.4375 17H6.625L6.09687 15.4286H5V11.4804C5 11.0482 5.15911 10.6815 5.47734 10.3804C5.79557 10.0792 6.17812 9.92857 6.625 9.92857V7.57143C6.625 7.13929 6.78411 6.76935 7.10234 6.46161C7.42057 6.15387 7.80312 6 8.25 6H14.75C15.1969 6 15.5794 6.15387 15.8977 6.46161C16.2159 6.76935 16.375 7.13929 16.375 7.57143V9.92857C16.8219 9.92857 17.2044 10.0824 17.5227 10.3902C17.8409 10.6979 18 11.0679 18 11.5V15.4286H16.9031L16.375 17H15.5625L15.0344 15.4286H7.96562L7.4375 17ZM12.3125 9.92857H14.75V7.57143H12.3125V9.92857ZM8.25 9.92857H10.6875V7.57143H8.25V9.92857ZM6.625 13.8571H16.375V11.5H6.625V13.8571Z"
            fill="#828282"
          />
          <rect
            x="2.75"
            y="2.75"
            width="17.5"
            height="17.5"
            rx="5.25"
            stroke="#828282"
            stroke-width="1.5"
          />
        </svg>
      </label>
      <input
        class="py-5 h-10 outline-none"
        type="text"
        id="room"
        placeholder="Rooms"
      />
    </div>

    <button type="button" class="px-3 py-2.5 text-white w-3/9">Search</button>
  </form>
</template>

<script setup></script>

<style scoped>
.destination,
input {
  background-color: #f2f2f2;
  font-size: 13px;
}
button {
  border-radius: 6px;
  background-color: var(--mainBlue);
}
</style>
