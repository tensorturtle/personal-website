import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

import starlight from "@astrojs/starlight";
import { astroExpressiveCode } from "@astrojs/starlight/expressive-code";

export default defineConfig({
  site: "https://tensorturtle.com",
  integrations: [astroExpressiveCode(), mdx(), sitemap(), tailwind(), starlight({title: "tensorturtle's website"})],
});