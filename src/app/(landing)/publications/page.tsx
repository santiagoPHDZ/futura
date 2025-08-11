
import Projects from "@/components/landing/projects";
import Publications from "@/components/landing/publications";
import { getProjects } from "@/server/services/projects";

const Page = async () => {

    const projects = await getProjects();
    console.log(projects)

    return (
        <div className="flex flex-col w-full mx-auto space-y-12 overflow-hidden items-center justify-center pb-12">

            <Publications />

        </div >
    )
}

export default Page
