
"use client";

import Image from "next/image";
import { motion } from 'framer-motion';
import { AspectRatio } from "../../ui/aspect-ratio";
import { Button } from "../../ui/button";
import NumberTicker from "../../magicui/number-ticker";

const Statistics = () => {

    return (
        <section className="bg-accent flex flex-col gap-6 w-full justify-center items-center mx-auto">

            <motion.div
                className="w-full bg-accent flex justify-center items-center"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, stagger: 0.25 }}
            >
                <div className="max-container p-8 flex space-x-12 text-center justify-between items-start">

                    <div className="flex-1 flex flex-col items-center justify-center">
                        <h5 className="text-4xl md:text-6xl lg:text-7xl text-primary-text font-bold">
                            <NumberTicker value={70} />
                        </h5>
                        <p className=" pt-4 text-lg font-light text-secondary-text">
                            of the global population will reside in urban areas by 2050.
                        </p>
                    </div>

                    <div className="flex-1 flex flex-col items-center justify-center">
                        <h5 className="text-4xl md:text-6xl lg:text-7xl text-primary-text font-bold">
                            <NumberTicker value={80} />
                        </h5>
                        <p className=" pt-4 text-lg font-light text-secondary-text">
                            of the world&apos;s GDP is contributed by urban areas.
                        </p>
                    </div>

                    <div className="flex-1 flex flex-col items-center justify-center">
                        <h5 className="text-4xl md:text-6xl lg:text-7xl text-primary-text font-bold">
                            1.5M
                        </h5>
                        <p className=" pt-4 text-lg font-light text-secondary-text">
                            people migrate to cities every week.
                        </p>
                    </div>

                </div>
            </motion.div>
        </section>
    )

}

export default Statistics;