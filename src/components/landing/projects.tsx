"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { PROJECTS } from "@/lib/projects";
import { AspectRatio } from "../ui/aspect-ratio";
import { calculateAspectRatio } from "@/lib/utils";
import { ProjectType } from "@/lib/types";

const Projects = () => {

    const projects = PROJECTS

    return (
        <section className="max-w-xl flex flex-col gap-12 px-4 mx-auto pt-16 w-full">
            <div className=" flex flex-col gap-8 justify-center items-center w-full">
                <div className="grid grid-cols-1 gap-8 w-full">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

const ProjectCard = ({ project }: { project: ProjectType }) => {

    const ratio = calculateAspectRatio(project.cover_image.width ?? 1920, project.cover_image.height ?? 1080)

    return (
        <Link href={project.path} className="w-full group">
            <motion.div
                initial={{ opacity: 0, scale: 1.1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex flex-col w-full rounded-lg overflow-hidden"
            >

                <AspectRatio ratio={ratio} className="w-full rounded-lg overflow-hidden">
                    <motion.div
                        initial={{ scale: 0.95 }}               // zoomed out
                        whileInView={{ scale: 1 }}              // normal size
                        viewport={{ once: true }}               // only once!
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="w-full h-full group"
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}          // zoom in on hover
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="w-full h-full"
                        >
                            <Image
                                src={project.cover_image.url}
                                alt={project.name}
                                width={project.cover_image.width ?? 1920}
                                height={project.cover_image.height ?? 1080}
                                unoptimized
                                className="object-cover w-full h-full rounded-lg  bg-accent"
                            />
                        </motion.div>
                    </motion.div>
                </AspectRatio>

                <div className="pt-2 flex justify-between items-center">
                    <h3 className="text-base font-light group-hover:underline underline-offset-2">
                        {project.name}
                    </h3>
                    <p className="text-sm font-light text-muted-foreground">{project.year}</p>
                </div>
            </motion.div>
        </Link>
    );
};
