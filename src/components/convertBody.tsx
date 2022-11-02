import React from "react";
import parse, { HTMLReactParserOptions, Element } from "html-react-parser";
import Image from "next/legacy/image";

type Props = {
  contentHTML: string;
};

const ConvertBody = ({ contentHTML }: Props) => {
  const options: HTMLReactParserOptions = {
    replace: (node) => {
      if (node instanceof Element && node.attribs) {
        if (node.name === "img") {
          const { src, alt, width, height } = node.attribs;
          return (
            <Image
              src={src}
              alt={alt}
              width={Number(width)}
              height={Number(height)}
              sizes="(min-width: 768) 768px, 100vw"
            />
          );
        }
      }
    },
  };
  const contentReact = parse(contentHTML, options);
  return <>{contentReact}</>;
};

export default ConvertBody;
