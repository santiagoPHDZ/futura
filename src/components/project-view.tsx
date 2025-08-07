"use client";

import React from "react";
import { Document } from "@contentful/rich-text-types";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

type RichTextContent = Document;

interface ImageAsset {
  fields: {
    file: {
      url: string;
      contentType?: string;
      details?: any;
      fileName?: string;
    };
    title?: string;
  };
}

interface ProjectViewerProps {
  title: string;
  cover: string;
  content: RichTextContent;
}

export function ProjectViewer({ title, cover, content }: ProjectViewerProps) {
  const options = {
    renderNode: {
      [BLOCKS.HEADING_1]: (_: any, children: React.ReactNode) => (
        <h1 className="text-4xl font-bold mb-4">{children}</h1>
      ),
      [BLOCKS.HEADING_2]: (_: any, children: React.ReactNode) => (
        <h2 className="text-3xl font-semibold mb-3">{children}</h2>
      ),
      [BLOCKS.HEADING_3]: (_: any, children: React.ReactNode) => (
        <h3 className="text-2xl font-semibold mb-2">{children}</h3>
      ),
      [BLOCKS.HEADING_4]: (_: any, children: React.ReactNode) => (
        <h4 className="text-xl font-medium mb-2">{children}</h4>
      ),
      [BLOCKS.PARAGRAPH]: (_: any, children: React.ReactNode) => (
        <p className="text-muted-foreground mb-4">{children}</p>
      ),
      [BLOCKS.UL_LIST]: (_: any, children: React.ReactNode) => (
        <ul className="list-disc ml-6 mb-4 space-y-2">{children}</ul>
      ),
      [BLOCKS.OL_LIST]: (_: any, children: React.ReactNode) => (
        <ol className="list-decimal ml-6 mb-4 space-y-2">{children}</ol>
      ),
      [BLOCKS.LIST_ITEM]: (_: any, children: React.ReactNode) => (
        <li>{children}</li>
      ),
      [BLOCKS.QUOTE]: (_: any, children: React.ReactNode) => (
        <blockquote className="border-l-4 pl-4 italic text-muted-foreground mb-4">
          {children}
        </blockquote>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
        const asset: ImageAsset = node.data.target;
        const url = asset.fields?.file?.url;
        const title = asset.fields?.title || "Image";

        if (!url) return null;

        return (
          <div className="my-6">
            <img
              src={`https:${url}`}
              alt={title}
              className="rounded-xl shadow-sm w-full h-auto"
            />
            <p className="text-sm text-center text-muted-foreground mt-2">
              {title}
            </p>
          </div>
        );
      },
      [INLINES.HYPERLINK]: (node: any, children: React.ReactNode) => (
        <a
          href={node.data.uri}
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-blue-600 hover:text-blue-800"
        >
          {children}
        </a>
      ),
    },
  };

  return (
    <Card className="max-w-3xl mx-auto p-4 md:p-6 mt-6">
      <div className="mb-6">
        <img
          src={cover}
          alt={title}
          className="w-full rounded-xl shadow-md mb-4"
        />
        <h1 className="text-4xl font-bold tracking-tight">{title}</h1>
      </div>
      <Separator className="mb-6" />
      <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
        {documentToReactComponents(content, options)}
      </CardContent>
    </Card>
  );
}
