import { AstroSite, StackContext } from "sst/constructs";

export function Web({ stack }: StackContext) {
  const web = new AstroSite(stack, `web`, {
    path: "./packages/blog",
  });

  stack.addOutputs({
    WebEndpoint: web.url,
  });
}
