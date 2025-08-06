
"use client";

import { motion } from 'framer-motion';

const TextBlock = ({ header, description }: { header?: string, description?: string }) => {

    return (
        <motion.div
            className="w-full text-left space-y-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, stagger: 0.25 }}
        >

            {
                header && (
                    <h1 className="uppercase w-full font-header text-left font-semibold text-primary-text">
                        {header}
                    </h1>
                )
            }

            {
                description && (
                    <p className="text-lg font-light text-secondary-text ">
                        {description}
                    </p>
                )
            }
        </motion.div>
    )

}

export default TextBlock;