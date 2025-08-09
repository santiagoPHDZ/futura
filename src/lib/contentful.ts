
import { createClient } from 'contentful';
import { ImageType } from './types/project';

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
});


export function formatContentfulImage(imageField: any): ImageType | undefined {
    if (!imageField?.fields?.file?.url) return undefined;

    const file = imageField.fields.file;
    return {
        url: file.url.startsWith('//') ? `https:${file.url}` : file.url,
        width: file.details.image?.width || 0,
        height: file.details.image?.height || 0,
    };
}
