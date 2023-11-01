import contentful, { type EntryFieldTypes } from "contentful";
import { Config } from "sst/node/config";


export interface BlogPost {
  contentTypeId: "blogPost";
  fields: {
    title: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Text;
    intro: EntryFieldTypes.Text;
    content: EntryFieldTypes.RichText;
    coverImage: EntryFieldTypes.AssetLink;
    tags: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
    date: EntryFieldTypes.Date;
    lastUpdatedBy: EntryFieldTypes.Text;
  };
}

export const contentfulClient = contentful.createClient({
  space: Config.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? Config.CONTENTFUL_PREVIEW_TOKEN
    : Config.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
});
