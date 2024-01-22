import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/base.css";
import BaseCard from "@/components/BaseCardStyle/BaseCard.vue";

createApp(App).component(BaseCard, "BaseCard").use(router).mount("#app");
