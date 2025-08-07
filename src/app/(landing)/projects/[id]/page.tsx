
import Image from "next/image";
import type { Metadata } from "next";
import { getProjectById } from "@/server/services/projects";
import type { Document } from "@contentful/rich-text-types";
import { apiServer } from "@/trpc/server";
import { ProjectViewer } from "@/components/project-view";

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
const Page = async ({ params }: { params: { id: string } }) => {

  const project = await apiServer.projects.getById.query({ id: params.id })

  if (!project) return <div>Not found</div>;
  if (!project.content) return <div>Not found</div>;

  return (
    <ProjectViewer
      title={project.title}
      cover={`https:${project.cover_image?.url}`}
      content={project.content}
    />
  );
}

export default Page
