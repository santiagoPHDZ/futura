import { Document } from '@contentful/rich-text-types';

export interface ProjectType {
  id: string;
  title: string;
  content?: Document; // If it's rich text JSON, change this to Document
  cover_image?: ImageType;
  year?: number;
}

export interface ImageType {
  url: string;
  width: number;
  height: number;
}