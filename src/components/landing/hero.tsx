
"use client";

import Image from "next/image";
import { motion } from 'framer-motion';
import { AspectRatio } from "../ui/aspect-ratio";
import { Button } from "../ui/button";
import { HeroType } from "@/lib/types";

const Hero = ({ image, header, caption }: HeroType) => {

    return (
        <div className=" relative w-full h-screen-dynamic ">

            <Image
                src={image.url}
                width={image.width ?? 1920}
                height={image.height ?? 1080}
                alt="Image"
                className="object-cover rounded-none w-screen h-screen-dynamic bg-background"
            />

            <div className="rounded-none  absolute inset-0 bg-gradient-to-t to-transparent via-transparent from-background w-screen h-screen-dynamic"></div>

            <div className="w-full h-screen-dynamic flex flex-col items-center justify-center absolute bottom-0 left-0  text-center space-y-2 pb-12">
                <motion.div
                    className="w-full max-container "
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, stagger: 0.25 }}
                >
                    <div className="px-4 w-full h-screen-dynamic flex items-end justify-start text-center pb-8">

                        <div className=" flex flex-col text-left space-y-2">
                            <h5
                                className="text-3xl font-header uppercase font-medium md:text-4xl lg:text-5xl text-left text-primary-text"
                            >
                                {header}
                            </h5>

                            <p
                                className="text-xl font-light text-secondary-text"
                            >
                                {caption}
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>

        </div>
    )

}

export default Hero;