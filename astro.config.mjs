import { defineConfig, passthroughImageService } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://www.anirban.space/",
  integrations: [tailwind(), icon(), mdx()],
  output: "server",
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
  image: {
    service: passthroughImageService(),
  },
});
