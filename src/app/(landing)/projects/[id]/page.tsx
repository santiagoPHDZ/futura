
import type { Metadata } from "next";
import { getProjectById } from "@/server/services/projects";
import { apiServer } from "@/trpc/server";
import Hero from "@/components/landing/projects/hero";
import Details from "@/components/landing/projects/details";
import { ProjectContent } from "@/components/landing/projects/content";

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  
  const project = await getProjectById(params.id);
  if (!project) return { title: "Project Not Found" };

  const img = project.cover_image;

  return {
    title: project.name,
    description: `${project.name}`,
    openGraph: {
      title: project.name,
      description: `${project.name}`,
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

const Page = async ({ params }: { params: { id: string } }) => {

  const project = await apiServer.projects.getById.query({ id: params.id })

  if (!project) return <div>Not found</div>;
  if (!project.content) return <div>Not found</div>;
  console.log(project)

  return (
    <div className="flex flex-col w-full mx-auto space-y-12 overflow-hidden items-center justify-center pb-12">

      <Hero project={project} />

      <section className="max-container px-4 w-full space-y-12">

        <Details project={project} />

        <ProjectContent project={project} />
      </section>

    </div >
  );
}

export default Page
