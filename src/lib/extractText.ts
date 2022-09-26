import { convert } from "html-to-text";
export const extractText = (html: string, length = 80, more = "…") => {
  const text = convert(html, {
    selectors: [{ selector: "a", options: { ignoreHref: true } }],
  });

  return text.slice(0, length) + more;
};
