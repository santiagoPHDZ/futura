import { client, formatContentfulImage } from "@/lib/contentful";
import { ProjectType } from "@/lib/types/project";

export async function getProjects(): Promise<ProjectType[]> {
    const entries = await client.getEntries({
        content_type: "projects",
        order: ["-fields.created_at"],
        include: 1
    });

    return entries.items.map((item: any) => ({
        id: item.fields.id as string,
        title: item.fields.title as string,
        year: item.fields.year as number,
        cover_image: formatContentfulImage(item.fields.cover_image),
        content: item.fields.content as any
    }));
}

export async function getProjectById(id: string): Promise<ProjectType | null> {
    const entries = await client.getEntries({
        content_type: 'projects',
        'fields.id': id,
        limit: 1,
        include: 1
    });

    if (!entries.items.length) return null;

    const entry = entries.items[0];

    return {
        id: entry.fields.id as string,
        title: entry.fields.title as string,
        year: entry.fields.year as number,
        cover_image: formatContentfulImage(entry.fields.cover_image),
        content: entry.fields.content as any
    };
}
