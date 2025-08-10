
"use client";

import Image from "next/image";
import { motion } from 'framer-motion';
import { ProjectType } from "@/lib/types/project";

const Hero = ({ project }: { project: ProjectType }) => {

    if (!project.cover_image) return

    return (
        <div className=" relative w-full h-screen-dynamic">

            <Image
                src={project.cover_image.url}
                width={project.cover_image.width ?? 1920}
                height={project.cover_image.height ?? 1920}
                alt="Cover image"
                unoptimized
                className="object-cover rounded-none w-screen h-screen-dynamic bg-background"
            />

            <div className="rounded-none  absolute inset-0 bg-black/10 w-screen h-screen-dynamic"/>

            <div className="w-full h-screen-dynamic flex flex-col items-center justify-center absolute bottom-0 left-0  text-center space-y-2">
                <motion.div
                    className="w-full max-container"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, stagger: 0.25 }}
                >
                    <div className="px-4 w-full h-screen-dynamic flex items-end justify-start text-center pb-8">

                        <div className=" flex flex-col text-left space-y-2 text-white">
                            <h5
                                className="text-4xl font-header font-medium md:text-5xl lg:text-6xl text-left"
                            >
                                {project.name}
                            </h5>

                            <p
                                className="text-xl font-light"
                            >
                                {project.location}
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>

        </div>
    )

}

export default Hero;