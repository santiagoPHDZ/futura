
import Footer from "@/components/footer"
import NavBar from "@/components/navbar"
import { Metadata } from "next"

// Metadata
export const metadata: Metadata = {
    title: 'FUTURA',
    description: 'We belive in the future'
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
