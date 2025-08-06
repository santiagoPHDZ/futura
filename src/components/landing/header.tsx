
"use client";

import Image from "next/image";
import { motion } from 'framer-motion';
import { AspectRatio } from "../ui/aspect-ratio";
import { Button } from "../ui/button";

const HeaderBlock = ({ header, subheader }: { header: string, subheader: string }) => {

    return (
        <motion.div
            className="w-full flex flex-col text-left space-y-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, stagger: 0.25 }}
        >

            <p
                className="text-sm font-extralight text-primary-text"
            >
                {subheader}
            </p>

            <h5
                className="text-2xl md:text-3xl lg:text-4xl text-left font-header font-medium text-primary-text"
            >
                {header}
            </h5>

        </motion.div>
    )

}

export default HeaderBlock;