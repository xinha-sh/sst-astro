import aws from "astro-sst/lambda";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: aws(),
});
