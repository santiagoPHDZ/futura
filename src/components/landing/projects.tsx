"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { AspectRatio } from "../ui/aspect-ratio";
import { apiClient } from "@/trpc/trpc-provider";
import { ProjectType } from "@/lib/types/project";

export default function Projects() {
  const { data: projects, isLoading } = apiClient.projects.list.useQuery();

  if (isLoading) return <p>Loading...</p>;
  if (!projects?.length) return <p>No projects found</p>;

  return (
    <section className="max-container px-4 mx-auto pt-16 flex flex-col gap-12 w-full">
      <div className="grid grid-cols-1 gap-8 w-full pt-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: ProjectType }) {
  const img = project.cover_image;
  const ratio = img ? img.width / img.height : 16 / 9;

  return (
    <Link href={`/projects/${project.id}`} className="w-full group">
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col w-full rounded-lg overflow-hidden"
      >
        <AspectRatio ratio={ratio} className="w-full rounded-lg overflow-hidden">
          {img && (
            <motion.div
              initial={{ scale: 0.95 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="w-full h-full group"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="w-full h-full"
              >
                <Image
                  src={img.url}
                  alt={project.name}
                  width={img.width}
                  height={img.height}
                  unoptimized
                  className="object-cover w-full h-full rounded-lg  bg-accent"
                />
              </motion.div>
            </motion.div>
          )}
        </AspectRatio>

        <div className="pt-2 flex justify-between items-center">
          <h3 className="text-base font-light group-hover:underline underline-offset-2">
            {project.name}
          </h3>
          <p className="text-sm font-light text-muted-foreground">{project.location}</p>
        </div>
      </motion.div>
    </Link>
  );
}
