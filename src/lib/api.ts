import type { Foundation } from "../models/foundation";
import type { FoundationEntry } from "../models/foundation-entry";
import { contentfulClient } from "./contentful";

export async function getFoundations() {
  return contentfulClient.getEntries<Foundation>({
    content_type: "foundations",
  });
}

export async function getFoundationEntry(entryId: string) {
  return contentfulClient.getEntries<FoundationEntry>({
    content_type: "fondation-entries",
    entryId,
  });
}