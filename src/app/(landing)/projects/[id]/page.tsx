
import Image from "next/image";
import type { Metadata } from "next";
import { getProjectById } from "@/server/services/projects";
import type { Document } from "@contentful/rich-text-types";

// Generate metadata for SEO & OG
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const project = await getProjectById(params.id);
  if (!project) return { title: "Project Not Found" };

  const img = project.cover_image;

  return {
    title: project.title,
    description: `Details about ${project.title}`,
    openGraph: {
      title: project.title,
      description: `Details about ${project.title}`,
      images: img
        ? [
            {
              url: img.url,
              width: img.width,
              height: img.height,
            },
          ]
        : [],
    },
  };
}

// Render project page
export default async function ProjectPage({ params }: { params: { id: string } }) {
  const project = await getProjectById(params.id);
  if (!project) return <p>Project not found</p>;

  const richTextContent: Document =
    typeof project.content === "string" ? JSON.parse(project.content) : project.content;

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>

      {project.cover_image && (
        <Image
          src={project.cover_image.url}
          alt={project.title}
          width={project.cover_image.width}
          height={project.cover_image.height}
          className="w-full h-auto rounded-lg mb-6"
          priority
        />
      )}

    </main>
  );
}
