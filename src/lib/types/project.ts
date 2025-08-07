
export interface ProjectType {
  id: string;
  title: string;
  content?: string; // If it's rich text JSON, change this to Document
  cover_image?: ImageType;
}

export interface ImageType {
  url: string;
  width: number;
  height: number;
}