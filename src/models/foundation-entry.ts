import type { RichTextContent, RichTextData } from "contentful";

export interface FoundationEntry {
  name: string;
  content: RichTextContent;
  slug: string;
}
