
"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from 'framer-motion';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { CLOUDFLARE_URL } from "@/lib/constants";

const SDG = () => {

    return (
        <section className="relative w-full h-[calc(100vh-64px)] ">

            <AspectRatio ratio={16 / 9} className=" w-full h-[calc(100vh-64px)] rounded-lg">
                <Image
                    src={`${CLOUDFLARE_URL}/projects/dynamic_city/solution.png`}
                    fill
                    alt="Image"
                    className="object-cover rounded-lg h-[calc(100vh-64px)]"
                />
            </AspectRatio>

            <div className=" absolute inset-0 bg-black/30  h-[calc(100vh-64px)] rounded-lg"></div>

            <div className="w-full h-[calc(100vh-64px)] flex flex-col items-center justify-center absolute bottom-0 left-0 p-4 text-center space-y-2 pb-12">
            <motion.div
                className="w-full"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, stagger: 0.25 }}
            >
                <div className=" flex items-center justify-center text-center">
                    <h5 className="w-full text-3xl md:text-4xl lg:text-5xl text-center font-light text-background font-header">
                        <span className=" font-semibold ">Sustainable development</span> cannot be achieved without significantly <span className=" font-semibold"> transforming the way urban spaces are built and managed.</span>
                    </h5>
                </div>
            </motion.div>
            </div>


        </section >
    )
}

export default SDG;