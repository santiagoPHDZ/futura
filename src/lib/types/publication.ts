
import { Document } from '@contentful/rich-text-types';
import { ImageType } from "./image";

export type PublicationType = {
  id: string;
  title: string;
  cover_image?: ImageType;
  content?: Document;
};