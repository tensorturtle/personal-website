import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

import starlight from "@astrojs/starlight";
import { astroExpressiveCode } from "@astrojs/starlight/expressive-code";

export default defineConfig({
  site: "https://tensorturtle.com",
  integrations: [astroExpressiveCode(), mdx(), sitemap(), starlight({title: "tensorturtle's website"})],
  vite: {
    plugins: [tailwindcss()],
  },
});