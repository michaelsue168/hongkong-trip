/* eslint-disable vue/multi-word-component-names */
import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import PrimeVue from "primevue/config";
import "primeicons/primeicons.css";

import Aura from "@primeuix/themes/aura";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      cssLayer: {
        name: "primevue",
        order: "theme, base, primevue",
      },
    },
  },
});

import Timeline from "primevue/timeline";
import Card from "primevue/card";
import Tag from "primevue/tag";
import ScrollTop from "primevue/scrolltop";

app.component("Timeline", Timeline);
app.component("Card", Card);
app.component("Tag", Tag);
app.component("ScrollTop", ScrollTop);

app.mount("#app");
