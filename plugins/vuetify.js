import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    ssr: true,
    components,
    directives,
    theme: {
      themes: {
        light: {
          colors: {
            primary: "#FF9800", // Orange color for buttons
            secondary: "#4CAF50",
            background: "#E3F2FD",
          },
        },
      },
    },
  });

  app.vueApp.use(vuetify);
});
