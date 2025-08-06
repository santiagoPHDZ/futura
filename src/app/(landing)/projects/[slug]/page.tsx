
import Image from 'next/image';
import type { Metadata } from 'next';
import { getProjectBySlug, getProjects } from '@/server/services/content/projects';
import { RichTextRenderer } from '@/components/RichTextRenderer';

export async function generateStaticParams() {
    const projects = await getProjects();
    return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const project = await getProjectBySlug(params.slug);
    if (!project) return { title: 'Project Not Found' };

    return {
        title: `${project.title}`,
        openGraph: {
            title: project.title,
            images: [
                {
                    url: `https:${project.cover_image}`,
                    width: 800,
                    height: 600,
                },
            ],
        },
    };
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
    const project = await getProjectBySlug(params.slug);

    if (!project) return <p>Project not found</p>;

      const richTextContent = typeof project.content === 'string' ? JSON.parse(project.content) : project.content;

    return (
        <main className="max-w-3xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
            {project.cover_image && (
                <Image
                    src={`https:${project.cover_image}`}
                    alt={project.title}
                    width={800}
                    height={500}
                    className="w-full h-auto rounded-lg mb-6"
                />
            )}

            <RichTextRenderer document={richTextContent} />

        </main>
    );
}
