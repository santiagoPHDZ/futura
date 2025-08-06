// // "use client";

// import { motion, useMotionValue } from "framer-motion";
// import { useGesture } from "@use-gesture/react";
// import Image from "next/image";
// import { useState } from "react";
// import { cn } from "@/lib/utils";

// const ZoomableImage = ({
//   src,
//   width,
//   height,
//   className,
// }: {
//   src: string;
//   width: number;
//   height: number;
//   className?: string;
// }) => {
//   const scale = useMotionValue(1);
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);

//   const bind = useGesture({
//     onPinch: ({ offset: [d] }) => {
//       scale.set(Math.max(1, 1 + d / 200));
//     },
//     onWheel: ({ delta: [, dy] }) => {
//       scale.set(Math.max(1, scale.get() - dy * 0.001));
//     },
//   });

//   return (
//     <div className="w-screen h-screen overflow-scroll bg-black flex items-center justify-center">
//       <div className="relative">
//         <motion.div
//           {...bind()}
//           style={{ scale }}
//           className="origin-top-left"
//         >
//           <Image
//             src={src}
//             width={width}
//             height={height}
//             alt="Zoomable"
//             unoptimized
//             className={cn("select-none", className)}
//           />
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default ZoomableImage;
