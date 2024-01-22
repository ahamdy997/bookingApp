import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/base.css";
import BaseCard from "@/components/BaseCardStyle/BaseCard.vue";
import TheNavbar from "@/components/TheNavbar/TheNavbar.vue";

createApp(App)
  .component("BaseCard", BaseCard)
  .component("TheNavbar", TheNavbar)
  .use(router)
  .mount("#app");
