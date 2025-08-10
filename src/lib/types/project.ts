
import { Document } from '@contentful/rich-text-types';
import { ImageType } from './image';

export interface ProjectType {
  id: string;
  name: string;
  content?: Document;
  cover_image?: ImageType;
  year?: number;
  status?: string;
  client?: string;
  location?: string;
  created_at?: string;
  images?: ImageType[];
}
