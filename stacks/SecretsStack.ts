import { Config, StackContext } from "sst/constructs";

export function Secrets(ctx: StackContext) {
  return {
    contentful: Config.Secret.create(
      ctx.stack,
      "CONTENTFUL_SPACE_ID",
      "CONTENTFUL_DELIVERY_TOKEN",
      "CONTENTFUL_PREVIEW_TOKEN"
    ),
  };
}
