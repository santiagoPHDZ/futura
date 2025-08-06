import { CLOUDFLARE_URL } from "./constants"
import { ProjectType } from "./types"

export const PROJECTS: ProjectType[] = [
    {
        name: "House of The Future",
        year: "2025",
        category: "architecture",
        path: "/projects/house_of_the_future",
        cover_image: {
            url: `${CLOUDFLARE_URL}/projects/house_of_the_future/cover.jpg`
        },
        description: "United Arab Emirates",
    },
    {
        name: "Social Housing In Mexico",
        year: "2025",
        category: "architecture",
        path: "/projects/social_housing_mx",
        cover_image: {
            url: `${CLOUDFLARE_URL}/projects/social_housing_mx/cover.jpg`,
            width: 1920,
            height: 1336
        },
        description: "3D Printed Homes",
    },
    {
        name: "Smart & Sustainable Marina",
        year: "2024",
        category: "architecture",
        path: "/projects/monaco_marina",
        cover_image: {
            url: `${CLOUDFLARE_URL}/projects/monaco_marina/cover.jpg`
        },
        description: "Monaco Marina Management"
    },
    {
        name: "Dynamic City",
        year: "2023",
        category: "architecture",
        path: "/projects/dynamic_city",
        cover_image: {
            url: `${CLOUDFLARE_URL}/projects/dynamic_city/cover.jpg`
        },
        description: "Building scalable, adaptive cities for a changing world."
    },
]