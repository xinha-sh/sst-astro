import { SSTConfig } from "sst";
import { Web } from "./stacks/MyStack";
import { Secrets } from "./stacks/SecretsStack";

export default {
  config(_input) {
    return {
      name: "astro-contentful",
      region: "ap-south-1",
      profile: "peppyhop-dev",
    };
  },
  stacks(app) {
    app.setDefaultRemovalPolicy("destroy");

    app.stack(Secrets).stack(Web);
  },
} satisfies SSTConfig;
