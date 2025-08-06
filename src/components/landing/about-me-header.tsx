
"use client";

import Image from "next/image";
import { motion } from 'framer-motion';

const AboutMeHeaderBlock = () => {

    return (
        <motion.div
            className="w-full flex flex-col text-left space-y-2 "
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, stagger: 0.25 }}
        >
            <h5
                className="text-2xl md:text-3xl lg:text-4xl text-left font-header font-medium text-primary-text"
            >
                Hi! I&apos;m Sant Padilla.
            </h5>

            <h4
                className="text-xl md:text-2xl font-header lg:text-3xl text-left font-regular text-secondary-text"
            >
                I’m an Architect
            </h4>


        </motion.div>
    )

}

export default AboutMeHeaderBlock;