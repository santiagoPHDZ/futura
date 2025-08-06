import React from 'react';
import { BLOCKS, Document, Node, Text, Block } from '@contentful/rich-text-types';

interface RichTextRendererProps {
  document: Document;
}

function isBlockNode(node: Node): node is Block {
  return 'content' in node;
}

function renderNodes(nodes: Node[]): React.ReactNode[] {
  return nodes.map((node, index) => {
    if (node.nodeType === 'text') {
      const textNode = node as Text;
      return textNode.value;
    }

    if (isBlockNode(node)) {
      switch (node.nodeType) {
        case BLOCKS.HEADING_1:
          return <h1 key={index} className="text-4xl font-bold mb-4">{renderNodes(node.content)}</h1>;
        case BLOCKS.HEADING_2:
          return <h2 key={index} className="text-3xl font-semibold mb-3">{renderNodes(node.content)}</h2>;
        case BLOCKS.PARAGRAPH:
          return <p key={index} className="mb-4 leading-relaxed">{renderNodes(node.content)}</p>;
        case BLOCKS.UL_LIST:
          return <ul key={index} className="list-disc pl-6 mb-4">{renderNodes(node.content)}</ul>;
        case BLOCKS.LIST_ITEM:
          return <li key={index}>{renderNodes(node.content)}</li>;
        default:
          return node.content ? renderNodes(node.content) : null;
      }
    }

    return null;
  });
}

export function RichTextRenderer({ document }: RichTextRendererProps) {
  return <>{renderNodes(document.content)}</>;
}
