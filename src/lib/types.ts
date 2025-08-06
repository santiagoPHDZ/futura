
// Hero Header
export type HeroType = {
    image: ImageType,
    header: string,
    caption: string
}

// Project details
export type ProjectType = {
    name: string,
    category: "architecture" | "technology",
    path: string,
    cover_image: ImageType,
    year?: string,
    description: string,
}

// Image
export type ImageType = {
    url: string,
    width?: number,
    height?: number,
}