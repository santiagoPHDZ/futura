"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ProjectType } from "@/lib/types/project";

const Hero = ({ project }: { project: ProjectType }) => {
    if (!project.cover_image) return null;

    return (
        <div className="relative w-full h-screen-dynamic">

            <Image
                src={project.cover_image.url}
                width={project.cover_image.width ?? 1920}
                height={project.cover_image.height ?? 1080}
                alt={project.name}
                unoptimized
                className="object-cover w-screen h-screen-dynamic bg-background"
            />

            <div className="absolute inset-0 bg-black/50" />

            <div className="absolute bottom-0 left-0 px-4 pb-8 text-white w-full flex items-center justify-center">
                <motion.div
                    className="max-container w-full space-y-2"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, stagger: 0.25 }}
                >
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-header font-medium">
                        {project.name}
                    </h1>
                    <p className="text-xl font-light">
                        {project.tagline ?? project.location}
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
