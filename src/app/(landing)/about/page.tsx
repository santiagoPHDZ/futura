import AboutMeHeaderBlock from "@/components/landing/about-me-header"
import HeaderBlock from "@/components/landing/header"
import TextBlock from "@/components/landing/text-block"

const Page = async () => {

    return (
        <div className="flex flex-col w-full mx-auto space-y-12 overflow-hidden items-center justify-center pb-12">

            <section className="max-w-6xl px-4 w-full space-y-8 pt-20">

                <AboutMeHeaderBlock />

                <TextBlock description="I’m passionate about technical concepts and understanding how things work. From a young age, I loved building things and exploring their functionality. This curiosity led me to develop a deep appreciation for design—especially functional design—and sparked my lifelong journey of combining creativity with problem-solving." />

                <TextBlock description="As I grew, my interest expanded to understanding how technology works. I took self-taught courses like CS50 and Introduction to Technology by Harvard, which gave me the foundation to create my first app at 17. Two years later, that app reached the top 24 in the LATAM App Store, setting the stage for my entrepreneurial journey." />

                <TextBlock description="Since then, I’ve co-founded two additional software startups while pursuing my degree in architecture. Architecture attracted me because it merges creativity with the ability to shape real-world spaces. I’ve always been drawn to functionality—how spaces solve needs and address problems beyond aesthetics. In every project, I focus on understanding its technical aspects to ensure practicality and efficiency." />

                <TextBlock description="I’m passionate about functional and minimalist architecture, and I believe in designing spaces that not only look good but serve a purpose. Today, I’m on a mission to build a better future, one building at a time." />

                <TextBlock description="For me, architecture and technology may seem like distinct fields, but I see a profound connection in their technical and problem-solving aspects. This blend fuels my passion and defines my journey." />

                <TextBlock description="Reach out if you want to chat; you can usually find me on LinkedIn." />

            </section>


        </div >
    )
}

export default Page
