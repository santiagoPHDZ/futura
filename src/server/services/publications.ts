
import { client, formatContentfulImage } from "@/lib/contentful";
import { PublicationType } from "@/lib/types/publication";
import { Document } from "@contentful/rich-text-types";

export async function getPublications(): Promise<PublicationType[]> {
  const entries = await client.getEntries({
    content_type: "publications",
    order: ["-sys.createdAt"], // Sort by creation date
    include: 2
  });

  return entries.items.map((item: any) => ({
    id: item.fields.id as string,
    title: item.fields.title as string,
    content: item.fields.content as Document | undefined,
    cover_image: item.fields.cover_image
      ? formatContentfulImage(item.fields.cover_image)
      : undefined
  }));
}

export async function getPublicationById(id: string): Promise<PublicationType | null> {
  const entries = await client.getEntries({
    content_type: "publications",
    "fields.id": id,
    limit: 1,
    include: 2
  });

  if (!entries.items.length) return null;

  const entry: any = entries.items[0];

  return {
    id: entry.fields.id as string,
    title: entry.fields.title as string,
    content: entry.fields.content as Document | undefined,
    cover_image: entry.fields.cover_image
      ? formatContentfulImage(entry.fields.cover_image)
      : undefined
  };
}
