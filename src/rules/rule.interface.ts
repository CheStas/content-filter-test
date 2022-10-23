import { ContentItem } from "../types/contentItem";

export interface Rule {
  interpret(item: ContentItem, relativeDate?: string): boolean;
}
