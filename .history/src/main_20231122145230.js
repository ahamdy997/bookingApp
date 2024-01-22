import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/base.css";
import BaseCard from "@/components/BaseCardStyle/BaseCard.vue";
import NavbarLinks from "@/components/TheNavbar/NavbarLinks.vue";
import TheLogo from "@/components/TheNavbar/TheLogo.vue";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

createApp(App)
  .component("VueDatePicker", VueDatePicker)
  .component("BaseCard", BaseCard)
  .component("NavbarLinks", NavbarLinks)
  .component("TheLogo", TheLogo)
  .use(router)
  .mount("#app");
