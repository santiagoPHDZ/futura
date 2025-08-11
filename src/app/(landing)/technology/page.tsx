"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Page = () => {
  return (
    <div className="flex flex-col w-full mx-auto space-y-12 overflow-hidden items-center justify-center">
      <div className="relative w-full h-screen-dynamic">

        <Image
          src="https://images.ctfassets.net/im5v129mt517/4Qc9528YFCuOFNsJyqh0bS/379552ab78fff0eaa4f4c876043d4f83/IMG_3564__3_.jpg"
          width={4521}
          height={3198}
          alt="Cover image"
          unoptimized
          className="object-cover w-screen h-screen-dynamic bg-background"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute bottom-0 left-0 px-4 pb-8 text-white w-full flex items-center justify-center">
          <motion.div
            className="max-container w-full space-y-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, stagger: 0.25 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-header font-medium">
              Technology
            </h1>
            <p className="text-xl font-light">
              We are working on something new..
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Page;
