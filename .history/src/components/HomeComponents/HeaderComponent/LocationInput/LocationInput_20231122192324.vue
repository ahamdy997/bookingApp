<div class="location flex destination rounded items-center">
    <label for="browser">
      <figure>
        <img
          src="../../../assets/Form-Svg/Rooms-input.svg"
          alt="location pic"
          class="cursor-pointer mx-1"
          width="20"
          height="20"
          @click="x"
        />
      </figure>
    </label>
    <input
      list="browsers"
      name="browser"
      class="py-5 h-10 outline-none mr-1"
      id="browser"
      placeholder="Where are you going?"
      @click="flipArrow = !flipArrow"
      v-model="data"
    />

    <datalist id="browsers">
      <option value="Edge"></option>
      <option value="Firefox"></option>
      <option value="Chrome"></option>
      <option value="Opera"></option>
      <option value="Safari"></option>
    </datalist>
    <img
      src="../../../assets/Form-Svg/arrow-down 1.svg"
      :class="{ fliparrow: flipArrow }"
      alt=""
      @click="x"
    />
  </div>
