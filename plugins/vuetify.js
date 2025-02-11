import "vuetify/styles";
import { createVuetify } from "vuetify";
import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    ssr: true,
    defaults: {
      VContainer: {
        maxWidth: "1220",
      },
      VBtn: {
        rounded: "lg",
        style: [{ textTransform: "none" }],
      },
      global: {},
    },
    theme: {
      defaultTheme: "light",
      themes: {
        light: {
          colors: {
            primary: "#FFBF32", // Orange color for buttons
            secondary: "#529917",
            background: "#5D5D5D",
            "primary-darken": "#462104",
            "secondary-darken": "#162B08",
            "tertirary-darken": "#0f0f0f",
            white: "#FFFFFF",
            background: "#E6E4E1",
            section1: "#EDEBE5",
            section2: "#EDF7E1",
            section3: "#F6F6F6",
            default: "#0F0D0E",
            "on-section1": "#0F0D0E",
            "on-section2": "#0F0D0E",
            "on-section3": "#0F0D0E",
            "on-background": "#0F0D0E",
            "on-surface": "#0F0D0E",
          },
        },
      },
      blueprint: {
        defaults: {
          global: {
            fontFamily: "Gabarito",
          },
        },
      },
    },
  });

  app.vueApp.use(vuetify);
});

// #0F0D0E
// #0f0f0f
// #4C1C07
// #0F0D0E
