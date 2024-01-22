import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./router";
import "./assets/base.css";
import BaseCard from "@/components/BaseCardStyle/BaseCard.vue";
import NavbarLinks from "@/components/TheNavbar/NavbarLinks.vue";
import TheLogo from "@/components/TheNavbar/TheLogo.vue";

createApp(App)
  .component("BaseCard", BaseCard)
  .component("NavbarLinks", NavbarLinks)
  .component("TheLogo", TheLogo)
  .use(createPinia())
  .use(router)
  .mount("#app");
