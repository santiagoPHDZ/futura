
import Footer from "@/components/footer"
import ContactUsForm from "@/components/forms/contact-us"
import NavBar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { ArrowUpRight } from "lucide-react"
import { Metadata } from "next"
import Link from "next/link"

// Metadata
export const metadata: Metadata = {
    title: 'Sant Padilla',
}

const Layout = ({ children }: { children: React.ReactNode }) => {

    return (
        <main className="">

            <div className=" pt-8">
                <NavBar />
                <div className="w-full ">
                    {children}
                </div>
            </div>

            <Footer />
        </main>
    )
}

export default Layout
