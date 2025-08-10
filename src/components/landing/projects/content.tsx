"use client";

import Image from "next/image";
import { BLOCKS, INLINES, Document, Block, Text } from "@contentful/rich-text-types";
import { ProjectType } from "@/lib/types/project";
import { motion } from 'framer-motion';
import { AspectRatio } from "@/components/ui/aspect-ratio";

export const ProjectContent = ({ project }: { project: ProjectType }) => {

    if (!project?.content) return null;

    return (
        <div className=" flex flex-col w-full space-y-8">
            {project.content.content.map((node, i) => {
                switch (node.nodeType) {
                    case BLOCKS.HEADING_1:
                    case BLOCKS.HEADING_2:
                    case BLOCKS.HEADING_3:
                    case BLOCKS.HEADING_4:
                    case BLOCKS.HEADING_5:
                    case BLOCKS.HEADING_6:
                        return <HeaderCell key={i} node={node} />;

                    case BLOCKS.PARAGRAPH:
                        return <TextCell key={i} node={node} />;

                    case BLOCKS.EMBEDDED_ASSET:
                        return <ImageCell key={i} node={node} />;

                    default:
                        return null;
                }
            })}
        </div>
    );
}


// HEADER CELL
function HeaderCell({ node }: { node: Block }) {
    const text = extractText(node);
    return (
        <motion.div
            className="w-full text-left -mb-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, stagger: 0.25 }}
        >
            <h4 className="uppercase w-full text-left font-semibold text-primary-text">
                {text}
            </h4>
        </motion.div>
    );
}

// TEXT CELL
function TextCell({ node }: { node: Block }) {
    const text = extractText(node);
    return (
        <motion.div
            className="w-full text-left space-y-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, stagger: 0.25 }}
        >
            <p className="text-lg font-light text-secondary-text ">
                {text}
            </p>
        </motion.div>
    );
}

// IMAGE CELL
function ImageCell({ node }: { node: Block }) {
    const file = (node.data.target as any)?.fields?.file;
    const url = file?.url ? `https:${file.url}` : "";
    const alt = (node.data.target as any)?.fields?.title || "Image";
    const width = file?.details?.image?.width || 800;
    const height = file?.details?.image?.height || 500;
    const aspectRatio = width / height;

    return url ? (
        <motion.div
            className="w-full"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, stagger: 0.25 }}
        >
            <AspectRatio ratio={aspectRatio}>
                <Image
                    src={url}
                    alt={alt}
                    fill
                    className="rounded object-cover"
                    sizes="(max-width: 768px) 100vw, 800px"
                />
            </AspectRatio>
        </motion.div>
    ) : null;
}

// Helper: extract all text from child nodes
function extractText(node: Block): string {
    return node.content
        .map((child) => {
            if (child.nodeType === "text") {
                return (child as Text).value;
            }
            return "";
        })
        .join("");
}
