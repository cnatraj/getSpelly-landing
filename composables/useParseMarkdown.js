import { marked } from "marked"; // Import markdown parser

export function useParseMarkdown(text) {
  return text ? marked.parse(text) : "";
}
