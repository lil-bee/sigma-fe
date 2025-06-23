// @ts-check
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import node from "@astrojs/node";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
site: "https://sigma-distribusi.com",
  integrations: [sitemap(), icon()],

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: node({
    mode: "standalone",
  }),
});