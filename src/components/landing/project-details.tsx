
"use client";

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

type ProjectDetails = {
    year?: string,
    category?: string,
    client?: string,
    location?: string,
    size?: string,
    status?: string,
}

const Details = ({ details }: { details: ProjectDetails }) => {

    return (
        <motion.div
            className="w-full"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, stagger: 0.25 }}
        >
            <div className="text-left w-full space-y-2 ">

                {
                    (
                        details.year && (
                            <DetailLabel header='Year' label={details.year} />
                        )
                    )
                }

                {
                    (
                        details.location && (
                            <DetailLabel header='location' label={details.location} />
                        )
                    )
                }

                {
                    (
                        details.category && (
                            <DetailLabel header='Category' label={details.category} />
                        )
                    )
                }

                {
                    (
                        details.status && (
                            <DetailLabel header='Status' label={details.status} />
                        )
                    )
                }

                {
                    (
                        details.size && (
                            <DetailLabel header='Size m2' label={details.size} />
                        )
                    )
                }

                {
                    (
                        details.client && (
                            <DetailLabel header='Client' label={details.client} />
                        )
                    )
                }
            </div>
        </motion.div>
    )

}

export default Details;

const DetailLabel = ({ header, label }: { header: string, label?: string }) => {
    return (
        <div className={cn('flex  items-start justify-between space-y-1 w-full pt-1', header === "Year" ? "border-none" : "border-t")}>
            <p className="uppercase w-full text-left font-normal text-secondary-text">
                {header}
            </p>
            <p className='font-light w-full items-start flex text-secondary-text text-left'>
                {label ?? ""}
            </p>
        </div>
    )
}
