import { SSTConfig } from "sst";
import { Web } from "./stacks/MyStack";

export default {
  config(_input) {
    return {
      name: "astro-sst",
      region: "ap-south-1",
    };
  },
  stacks(app) {
    app.setDefaultRemovalPolicy("destroy");

    app.stack(Web);
  },
} satisfies SSTConfig;
