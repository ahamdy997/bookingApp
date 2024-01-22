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

import "vue-awesome-paginate/dist/style.css";

createApp(App)
  .component("BaseCard", BaseCard)
  .component("NavbarLinks", NavbarLinks)
  .component("TheLogo", TheLogo)
  .component("BaseDialog", BaseDialog)
  .use(createPinia())
  .use(router)
  .use(VueAwesomePaginate)
  .mount("#app");
