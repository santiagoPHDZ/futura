import { client } from "@/lib/contentful";
import { ProjectType } from "@/lib/types/project";


export async function getProjects(): Promise<ProjectType[]> {
    const entries = await client.getEntries({
        content_type: 'projects', // Change if your Content Type ID is different
        order: ['-sys.createdAt'],
    });

    return entries.items.map((item: any) => ({
        id: item.sys.id,
        slug: item.fields.title
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^\w-]+/g, ''),
        title: item.fields.title,
        content: item.fields.content,
        cover_image: item.fields.cover_image?.fields?.file?.url || '',
    }));
}

export async function getProjectBySlug(slug: string): Promise<ProjectType | undefined> {
    const projects = await getProjects();
    return projects.find((p) => p.slug === slug);
}
