"use client"

import Link from "next/link"
import { Button } from "./ui/button"
import { AlignJustify, ArrowUpRight, Linkedin, Mail, User, X } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { useState } from "react"
import Image from "next/image"
import { ThemeToggle } from "./theme-toggle"
import { usePathname } from "next/navigation"
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils"

const ROUTES = [
    {
        label: "Projects",
        newWindow: false,
        href: "/",
    },
    {
        label: "Technology",
        newWindow: false,
        href: "/technology",
    },
   {
        label: "Developments",
        newWindow: false,
        href: "/developments",
    },
    // {
    //     label: "Publications",
    //     newWindow: false,
    //     href: "/publications",
    // },
    {
        label: "Team",
        newWindow: false,
        href: "/team",
    },
]

const NavBar = () => {
    const path = usePathname()
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const handleLinkClick = () => {
        setIsSidebarOpen(false)
    }

    return (
        <nav className={cn("fixed top-0 z-50 backdrop-blur-md w-full flex items-center justify-center", isSidebarOpen ? "border-none bg-transparent" : " bg-background/80 ")}>
            <div className="w-full flex items-center justify-between h-14 px-4">
                
                
                    <Link href="/" className="">
                        <Image
                            src="/logo.png"
                            alt="FUTURA"
                            width={158}
                            height={25}
                            className="h-4 w-auto"
                        />
                    </Link>

                <div className="  flex space-x-3 pt-2">

                    <Sheet onOpenChange={setIsSidebarOpen} open={isSidebarOpen}>
                        <SheetTrigger asChild className="">
                            <>
                                {
                                    !isSidebarOpen && (
                                        <Button variant="ghost" size="icon" onClick={() => setIsSidebarOpen(true)}>
                                            <AlignJustify className="h-[1.2rem] w-[1.2rem]" />
                                        </Button>
                                    )
                                }

                                {
                                    isSidebarOpen && (
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className=" "
                                            onClick={() => setIsSidebarOpen(false)}
                                        >
                                            <X className=" h-[1.2rem] w-[1.2rem]" />
                                        </Button>
                                    )
                                }

                            </>
                        </SheetTrigger>
                        <SheetContent className="px-4 flex flex-col justify-between items-center" side="top">
                            <div className="flex flex-col items-center w-full space-y-8">

                                <nav className="space-y-4  w-full pb-4">
                                    {ROUTES.map((route) => (
                                        <motion.div
                                            key={route.href}
                                            className={`ease-in-out transition-colors ${path === route.href ? "text-primary" : "hover:text-primary text-muted-foreground"}`}
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, stagger: 0.25 }}
                                        >
                                            <Link
                                                href={route.href}
                                                target={route.newWindow ? "_blank" : undefined}
                                                className="flex items-center text-left font-light text-base"
                                                onClick={handleLinkClick}
                                            >
                                                <ArrowUpRight className="h-5 w-5 mr-1" />
                                                <p>{route.label}</p>
                                            </Link>
                                        </motion.div>
                                    ))}
                                </nav>

                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
