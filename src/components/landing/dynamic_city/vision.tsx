
"use client";

import Image from "next/image";
import { motion } from 'framer-motion';
import { AspectRatio } from "../../ui/aspect-ratio";
import { Button } from "../../ui/button";
import { cn } from "@/lib/utils";
import { Blocks } from "lucide-react";
import TextBlock from "../text-block";

const Vision = () => {

    return (
        <div className="flex flex-col gap-8 w-full justify-center items-center">

            <motion.div
                className=" flex space-x-4 w-full items-center"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, stagger: 0.25 }}
            >
                <div className="flex rounded-full border border-primary h-16 w-16 aspect-square items-center justify-center">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className=" text-primary">
                        <path d="M20 3H15C14.4477 3 14 3.44772 14 4V9C14 9.55228 14.4477 10 15 10H20C20.5523 10 21 9.55228 21 9V4C21 3.44772 20.5523 3 20 3Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M10 21V8C10 7.73478 9.89464 7.48043 9.70711 7.29289C9.51957 7.10532 9.26522 7 9 7H4C3.73478 7 3.48043 7.10532 3.29289 7.29289C3.10532 7.48043 3 7.73478 3 8V20C3 20.2652 3.10532 20.5196 3.29289 20.7071C3.48043 20.8946 3.73478 21 4 21H16C16.2652 21 16.5196 20.8946 16.7071 20.7071C16.8946 20.5196 17 20.2652 17 20V15C17 14.7348 16.8946 14.4804 16.7071 14.2929C16.5196 14.1054 16.2652 14 16 14H3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                <p className=" flex-1 text-lg font-light text-secondary-text">
                    Modular and <span className="text-primary-text font-medium">scalable structure</span>, conceived not just as a city, but as a system.
                </p>
            </motion.div>

            <motion.div
                className=" flex space-x-4 w-full items-center"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, stagger: 0.25 }}
            >
                <div className="flex rounded-full border border-primary h-16 w-16 aspect-square items-center justify-center">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className=" text-primary">
                        <path d="M18.5 21C20.433 21 22 19.433 22 17.5C22 15.567 20.433 14 18.5 14C16.567 14 15 15.567 15 17.5C15 19.433 16.567 21 18.5 21Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M5.5 21C7.433 21 9 19.433 9 17.5C9 15.567 7.433 14 5.5 14C3.567 14 2 15.567 2 17.5C2 19.433 3.567 21 5.5 21Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M15 6C15.5523 6 16 5.55228 16 5C16 4.44772 15.5523 4 15 4C14.4477 4 14 4.44772 14 5C14 5.55228 14.4477 6 15 6Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M12 17.5V14L9 11L13 8L15 11H17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                <p className=" flex-1 text-lg font-light text-secondary-text">
                    Each module integrates essential urban <span className="text-primary-text font-medium">infrastructure systems</span>, including transport, energy, waste, water and communications.
                </p>
            </motion.div>

            <motion.div
                className=" flex space-x-4 w-full items-center"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, stagger: 0.25 }}
            >
                <div className="flex rounded-full border border-primary h-16 w-16 aspect-square items-center justify-center">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className=" text-primary">
                        <path d="M3.99997 14.8988C3.25701 14.1397 2.69654 13.2215 2.32101 12.2137C2.02547 11.2059 1.92328 10.135 2.06333 9.08208C2.20299 8.02913 2.58043 7.02178 3.16707 6.13231C3.75371 5.25085 4.53416 4.51049 5.44931 3.97133C6.32445 3.43216 7.3903 3.10833 8.44914 3.02435C9.50798 2.94038 10.572 3.09846 11.5607 3.48664C12.5494 3.87481 13.4328 4.48289 14.1557 5.26481C14.8746 6.04674 15.4061 6.98201 15.71 7.99978H17.5C18.4655 7.99967 19.4054 8.3101 20.181 8.88522C20.9565 9.46033 21.5265 10.2696 21.8067 11.1932C22.087 12.1175 22.0627 13.1071 21.7373 14.0162C21.412 14.9252 20.8028 15.7055 20 16.2418" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M9.19995 22L12.2 15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M9 13L6 20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M17 13L14 20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                </div>
                <p className=" flex-1 text-lg font-light text-secondary-text">
                    The infrastructure is designed to <span className="text-primary-text font-medium">withstand environmental shocks</span>, such as storms and rising sea levels, providing a stable and safe living environment.
                </p>
            </motion.div>

            <motion.div
                className=" flex space-x-4 w-full items-center"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, stagger: 0.25 }}
            >
                <div className="flex rounded-full border border-primary h-16 w-16 aspect-square items-center justify-center">
                    <svg width="46" height="46" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className=" text-primary">
                        <path d="M16 8H10C9.46957 8 8.96086 8.21071 8.58579 8.58579C8.21071 8.96086 8 9.46957 8 10C8 10.5304 8.21071 11.0391 8.58579 11.4142C8.96086 11.7893 9.46957 12 10 12H14C14.5304 12 15.0391 12.2107 15.4142 12.5858C15.7893 12.9609 16 13.4696 16 14C16 14.5304 15.7893 15.0391 15.4142 15.4142C15.0391 15.7893 14.5304 16 14 16H8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M12 18V6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                </div>
                <p className=" flex-1 text-lg font-light text-secondary-text">
                    This system requires <span className="text-primary-text font-medium">less upfront investment</span>, allowing the city to grow as needed, ensuring financial feasibility and scalability.
                </p>
            </motion.div>

            <motion.div
                className=" flex space-x-4 w-full items-center"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, stagger: 0.25 }}
            >
                <div className="flex rounded-full border border-primary h-16 w-16 aspect-square items-center justify-center">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className=" text-primary">
                        <path d="M15 21V13C15 12.7348 14.8946 12.4804 14.7071 12.2929C14.5196 12.1054 14.2652 12 14 12H10C9.73478 12 9.48043 12.1054 9.29289 12.2929C9.10532 12.4804 9 12.7348 9 13V21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M3 9.99997C2.99993 9.70904 3.06333 9.42159 3.18579 9.15768C3.30824 8.89378 3.4868 8.65976 3.709 8.47197L10.709 2.47297C11.07 2.16788 11.5274 2.00049 12 2.00049C12.4726 2.00049 12.93 2.16788 13.291 2.47297L20.291 8.47197C20.5132 8.65976 20.6918 8.89378 20.8142 9.15768C20.9327 9.42159 21.0001 9.70904 21 9.99997V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V9.99997Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                <p className=" flex-1 text-lg font-light text-secondary-text">
                    The infrastructure offers a resilient ecosystem and essential services, enabling <span className="text-primary-text font-medium">buildings and inhabitants</span> to thrive.
                </p>
            </motion.div>

            <motion.div
                className=" flex space-x-4 w-full items-center"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, stagger: 0.25 }}
            >
                <div className="flex rounded-full border border-primary h-16 w-16 aspect-square items-center justify-center">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className=" text-primary">
                        <path d="M2 20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H20C20.5304 22 21.0391 21.7893 21.4142 21.4142C21.7893 21.0391 22 20.5304 22 20V8L15 13V8L8 13V4C8 3.46957 7.78929 2.96086 7.41421 2.58579C7.03914 2.21071 6.53043 2 6 2H4C3.46957 2 2.96086 2.21071 2.58579 2.58579C2.21071 2.96086 2 3.46957 2 4V20Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M17 18H18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M12 18H13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M7 18H8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                <p className=" flex-1 text-lg font-light text-secondary-text">
                    Modules can be <span className="text-primary-text font-medium">mass-produced</span> and delivered efficiently, connecting to form larger structures for scalable urban development.
                </p>
            </motion.div>

        </div>
    )

}

export default Vision;
