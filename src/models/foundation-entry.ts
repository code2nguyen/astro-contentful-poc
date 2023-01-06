import type { Document } from "@contentful/rich-text-types";

export interface FoundationEntry {
  name: string;
  content: Document;
  slug: string;
}
