import contentful from "contentful";
import {
  documentToHtmlString,
  type Options,
} from "@contentful/rich-text-html-renderer";
import { type Document, BLOCKS } from "@contentful/rich-text-types";

export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
});

const defaultRichTextOptions: Options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ENTRY]: (node, next) => {
      const isColorLink = node.data.target.fields.type === "Color";
      return isColorLink
        ? `<fds-color-token value=${node.data.target.fields.value}></fds-color-token>`
        : next(node.content);
    },
  },
};

export function richTextToHtmlString(content: Document) {
  return documentToHtmlString(content, defaultRichTextOptions);
}
