
"use client";

import Image from "next/image";
import { motion } from 'framer-motion';

const Hero = () => {

    return (
        <div className=" relative w-full h-screen-dynamic">

            <Image
                src={"https://images.ctfassets.net/im5v129mt517/12qTrSs1mYSuAIa6GvoFBr/08797ad3c35e30f826ba95187f23e112/IMG_3564__3_.jpg"}
                width={4521}
                height={3198}
                alt="Cover image"
                unoptimized
                className="object-cover rounded-none w-screen h-screen-dynamic bg-background"
            />

            <div className="rounded-none  absolute inset-0 bg-black/10 w-screen h-screen-dynamic" />

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
                                className="text-5xl font-header font-medium md:text-7xl text-left"
                            >
                                We belive in the future
                            </h5>
                        </div>
                    </div>
                </motion.div>
            </div>

        </div>
    )

}

export default Hero;