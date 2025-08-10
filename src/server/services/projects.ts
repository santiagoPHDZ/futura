import { client, formatContentfulImage } from "@/lib/contentful";
import { ImageType } from "@/lib/types/image";
import { ProjectType } from "@/lib/types/project";
import { Document } from "@contentful/rich-text-types";

export async function getProjects(): Promise<ProjectType[]> {
    const entries = await client.getEntries({
        content_type: "projects",
        order: ["-fields.created_at"],
        include: 2 // Increase depth to ensure linked assets resolve
    });

    return entries.items.map((item: any) => {
        const imagesField = item.fields.images as any[] | undefined;

        return {
            id: item.fields.id as string,
            name: item.fields.name as string,
            content: item.fields.content as Document | undefined,
            cover_image: item.fields.cover_image
                ? formatContentfulImage(item.fields.cover_image)
                : undefined,
            year: item.fields.year as number | undefined,
            status: item.fields.status as string | undefined,
            location: item.fields.location as string | undefined,
            tagline: item.fields.tagline as string | undefined,
            client: item.fields.client as string | undefined,
            created_at: item.fields.created_at as string | undefined,
            images: imagesField
                ? imagesField
                    .map((img) => formatContentfulImage(img))
                    .filter((img): img is ImageType => Boolean(img))
                : undefined
        };
    });
}

export async function getProjectById(id: string): Promise<ProjectType | null> {
    const entries = await client.getEntries({
        content_type: "projects",
        "fields.id": id,
        limit: 1,
        include: 2
    });

    if (!entries.items.length) return null;

    const entry: any = entries.items[0];
    const imagesField = entry.fields.images as any[] | undefined;

    return {
        id: entry.fields.id as string,
        name: entry.fields.name as string,
        content: entry.fields.content as Document | undefined,
        cover_image: entry.fields.cover_image
            ? formatContentfulImage(entry.fields.cover_image)
            : undefined,
        year: entry.fields.year as number | undefined,
        location: entry.fields.location as string | undefined,
        status: entry.fields.status as string | undefined,
        client: entry.fields.client as string | undefined,
        tagline: entry.fields.tagline as string | undefined,
        created_at: entry.fields.created_at as string | undefined,
        images: imagesField
            ? imagesField
                .map((img) => formatContentfulImage(img))
                .filter((img): img is ImageType => Boolean(img))
            : undefined
    };
}
