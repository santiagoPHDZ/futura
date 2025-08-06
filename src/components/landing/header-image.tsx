
"use client";

import Image from "next/image";
import { motion } from 'framer-motion';
import { AspectRatio } from "../ui/aspect-ratio";
import { Button } from "../ui/button";

const HeaderImageBlock = ({ url }: { url: string }) => {

    return (
        <AspectRatio ratio={16 / 9} className="w-full">
            <Image
                src={url}
                width={1920}
                height={1080}
                alt="Image"
                className="object-cover w-full h-full"
            />
        </AspectRatio>
    )

}

export default HeaderImageBlock;