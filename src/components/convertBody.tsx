import React from "react";
import parse, { HTMLReactParserOptions, Element } from "html-react-parser";
import Image from "next/image";

type Props = {
  contentHTNL: string;
};

const ConvertBody = ({ contentHTNL }: Props) => {
  const options: HTMLReactParserOptions = {
    replace: (node) => {
      if (node instanceof Element && node.attribs) {
        if (node.name === "img") {
          const { src, alt, width, height } = node.attribs;
          return (
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              sizes="(min-width: 768) 768px, 100vw"
            />
          );
        }
      }
    },
  };
  const contentReact = parse(contentHTNL, options);
  return <>{contentReact}</>;
};

export default ConvertBody;
