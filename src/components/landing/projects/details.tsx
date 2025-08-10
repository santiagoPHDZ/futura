
"use client";

import { ProjectType } from '@/lib/types/project';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion'

const Details = ({ project }: { project: ProjectType }) => {

    return (
        <motion.div
            className="w-full"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, stagger: 0.25 }}
        >
            <div className="text-left w-full space-y-2 ">
                <DetailLabel header='Client' label={project.client} />
                <DetailLabel header='Location' label={project.location} />
                <DetailLabel header='Status' label={project.status} />
                <DetailLabel header='Year' label={`${project.year}`} />
            </div>
        </motion.div>
    )

}

export default Details;

const DetailLabel = ({ header, label }: { header: string, label?: string }) => {
    return (
        <div className={cn('flex  items-start justify-between space-y-1 w-full pt-1', header === "Client" ? "border-none" : "border-t")}>
            <p className="uppercase w-full text-left font-normal text-secondary-text">
                {header}
            </p>
            <p className='font-light w-full items-start flex text-secondary-text text-left'>
                {label ?? ""}
            </p>
        </div>
    )
}
