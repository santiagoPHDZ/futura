
"use client";

import { cn, calculateAspectRatio } from "@/lib/utils";
import { Expand, MoveDiagonal, Plus, Scan } from "lucide-react";
import { ReactNode, useState } from "react";
import Image from "next/image";
import { AspectRatio } from "../ui/aspect-ratio";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { Button } from "../ui/button";
import { motion, useMotionValue, useTransform, useScroll, useAnimationControls, AnimatePresence, HTMLMotionProps, } from "framer-motion";
import { useGesture } from "@use-gesture/react"; // you need to install this: `npm install @use-gesture/react`

const ANIMATION_DELAY = 0.5;

const ImageBlock = ({ width, height, image, description, header, className, expandable }: { width: number, height: number, image: string, description?: string, header?: string, className?: string, expandable?: boolean }) => {

    const ratio = calculateAspectRatio(width, height)

    return (
        <InfoCard header={header ?? ""} description={description ?? ""} className={className} hiddeButton={image === "" ? true : false}>
            <div className="relative flex w-full bg-accent rounded-lg items-center justify-between group">

                <AspectRatio ratio={ratio} className="w-full rounded-lg overflow-hidden">
                    {
                        image !== "" && (
                            <Image
                                src={image}
                                width={width}
                                height={height}
                                alt="Image"
                                unoptimized
                                className={cn("object-cover w-full h-full rounded-lg", className, expandable === true ? "" : " transform transition-transform duration-500 ease-in-out group-hover:scale-105")}
                            />
                        )
                    }
                </AspectRatio>

                {
                    (header && image !== "") && (
                        <div className="absolute inset-0 bg-black/20 rounded-lg"></div>
                    )
                }

                {
                    expandable === true && (
                        <Dialog>
                            <DialogTrigger asChild >
                                <Button variant="outline" size="icon" className="absolute top-2 right-2 bg-accent/20 hover:bg-accent/50 border-none rounded-lg">
                                    <MoveDiagonal className="h-5 w-5"/>
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="p-0 w-screen h-screen max-w-none flex items-center justify-center bg-background">
                                {image !== "" && (
                                    <Image
                                        src={image}
                                        width={width}
                                        height={height}
                                        alt="Image"
                                        unoptimized
                                        className={cn(
                                            "object-contain max-h-screen max-w-screen w-auto h-auto",
                                            className
                                        )}
                                    />
                                )}
                            </DialogContent>
                        </Dialog>
                    )
                }
                <div className="absolute top-0 left-0 p-4 text-left space-y-2">
                    <motion.h3
                        className="w-full text-left text-lg text-background"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, stagger: 0.25 }}
                    >
                        {header}
                    </motion.h3>
                </div>
            </div>
        </InfoCard>
    )
}

export default ImageBlock;

const InfoCard = ({
    header,
    description,
    children,
    className,
    hiddeButton,
    ...props
}: {
    header: string;
    description: string;
    className?: string;
    hiddeButton?: boolean;
} & HTMLMotionProps<"div">) => {
    const [showDetail, setShowDetail] = useState(false);

    return (
        <motion.div
            // Explicitly cast to 'any' to ignore ref issues
            ref={null as any} // Or set ref to null to ignore
            className={cn("relative bg-accenti rounded-lg overflow-hidden flex flex-col w-full", className)}
            initial={false}
            animate={showDetail ? "detail" : "main"}
            {...props}
        >
            <>{children as ReactNode}</>

            {description !== "" && (
                <>
                    {!hiddeButton && (
                        <ToggleButton
                            onClick={() => setShowDetail(!showDetail)}
                        />
                    )}
                </>
            )}

            <AnimatePresence>
                {showDetail === true && (
                    <DetailContainer header={header} description={description} />
                )}

                {showDetail === false && hiddeButton === true && (
                    <DetailContainer header={header} description={description} />
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const DetailContainer = ({ header, description }: { header: string, description: string }) => {
    return (
        <motion.div
            ref={null as any}
            className="absolute inset-0 flex flex-col items-start justify-start bg-accent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { delay: ANIMATION_DELAY } }}
        >
            <div className="text-left p-4 space-y-2">
                <h3
                    className="w-full text-left text-lg text-primary-text"
                >
                    {header}
                </h3>

                <motion.p
                    className="text-lg font-light text-secondary-text"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, stagger: 0.25 }}
                >
                    {description}
                </motion.p>
            </div>
        </motion.div>
    );
};

const ToggleButton = ({ ...props }: {} & HTMLMotionProps<"button">) => {
    const animationVariants = {
        main: {
            rotate: 0,
        },
        detail: {
            rotate: 45,
        },
    };

    return (
        <motion.button
            ref={null as any}
            className="absolute bg-background right-4 bottom-4 h-8 w-8 rounded-full cursor-pointer flex justify-center items-center z-10"
            variants={animationVariants}
            transition={{
                bounce: 0,
            }}
            {...props}
        >
            <Plus className="h-5 w-5 text-primary" />
        </motion.button>
    );
};
