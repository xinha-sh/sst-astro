import tailwind from "@astrojs/tailwind";
import aws from "astro-sst/lambda";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      configFile: "tailwind.config.mjs",
    }),
  ],
  adapter: aws(),
  output: "hybrid",
  vite: {
    optimizeDeps: {
      exclude: ["sst"],
    },
  },
});
