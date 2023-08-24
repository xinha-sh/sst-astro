import { AstroSite, StackContext, use } from "sst/constructs";
import { Secrets } from "./SecretsStack";

export function Web({ stack }: StackContext) {
  const { contentful } = use(Secrets);

  const web = new AstroSite(stack, `web`, {
    path: "./packages/blog",
    bind: [
      contentful.CONTENTFUL_SPACE_ID,
      contentful.CONTENTFUL_DELIVERY_TOKEN,
      contentful.CONTENTFUL_PREVIEW_TOKEN,
    ],
  });

  stack.addOutputs({
    WebEndpoint: web.url,
  });
}
