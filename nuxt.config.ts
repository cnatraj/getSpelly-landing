// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from "vite-plugin-vuetify";
import { promises as fs } from "fs";
import path from "path";

export default defineNuxtConfig({
  css: ["vuetify/styles", "@mdi/font/css/materialdesignicons.css"],
  modules: [
    async (options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) =>
        config.plugins.push(vuetify())
      );
    },
  ],

  build: {
    transpile: ["vuetify"],
  },

  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: async () => {
        const resourcesDir = path.resolve("data/resources");
        try {
          const files = await fs.readdir(resourcesDir);
          const resourceRoutes = files
            .filter((file) => file.endsWith(".json"))
            .map((file) => `/resources/${file.replace(".json", "")}`);

          return ["/", "/resources", ...resourceRoutes];
        } catch (error) {
          console.error("Error reading resource files:", error);
          return ["/", "/resources"];
        }
      },
    },
  },

  runtimeConfig: {
    public: {
      appUrl: "https://app.getspelly.com",
    },
  },

  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Gabarito:wght@400;500;600;700;800;900&display=swap",
        },
      ],
      meta: [
        { name: "format-detection", content: "telephone=no" },
        { name: "robots", content: "index, follow" },
        { name: "theme-color", content: "#FF9800" },
      ],
    },
  },

  routeRules: {
    // Homepage pre-rendered at build time
    "/": { prerender: true },
    // Add more routes as needed
    // "/about": { prerender: true },
    // "/books": { prerender: true },
    // "/testimonials": { prerender: true },
    // "/contact": { prerender: true },
  },

  experimental: {
    payloadExtraction: true,
    renderJsonPayloads: true,
    viewTransition: true,
  },

  compatibilityDate: "2025-01-30",
});
