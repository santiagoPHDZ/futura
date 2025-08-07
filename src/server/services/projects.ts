import { client } from "@/lib/contentful";
import { ProjectType, ImageType } from "@/lib/types/project";

function formatImage(imageField: any): ImageType | undefined {
    if (!imageField?.fields?.file?.url) return undefined;

    const file = imageField.fields.file;
    return {
        url: file.url.startsWith('//') ? `https:${file.url}` : file.url,
        width: file.details.image?.width || 0,
        height: file.details.image?.height || 0,
    };
}

export async function getProjects(): Promise<ProjectType[]> {
    const entries = await client.getEntries({
        content_type: "projects", // Change if your Content Type ID is different
        order: ["-sys.createdAt"],
        include: 1, // Important to resolve linked assets
    });

    return entries.items.map((item: any) => ({
        id: item.sys.id,
        title: item.fields.title as string,
        cover_image: formatImage(item.fields.cover_image),
        content: item.fields.content as any
    }));
}

export async function getProjectById(id: string): Promise<ProjectType | null> {
    const entry = await client.getEntry(id, { include: 1 });
    if (!entry) return null;

    return {
        id: entry.sys.id,
        title: entry.fields.title as string,
        cover_image: formatImage(entry.fields.cover_image),
        content: entry.fields.content as any
    };
}
