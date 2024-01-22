import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./router";
import "./assets/base.css";
import BaseCard from "@/components/BaseCardStyle/BaseCard.vue";
import BaseDialog from "@/components/BaseDialog/BaseDialog.vue";
import NavbarLinks from "@/components/TheNavbar/NavbarLinks.vue";
import TheLogo from "@/components/TheNavbar/TheLogo.vue";
import VueAwesomePaginate from "vue-awesome-paginate";

createApp(App)
  .component("BaseCard", BaseCard)
  .component("NavbarLinks", NavbarLinks)
  .component("TheLogo", TheLogo)
  .component("BaseDialog", BaseDialog)
  .use()
  .use(createPinia())
  .use(router)
  .mount("#app");
