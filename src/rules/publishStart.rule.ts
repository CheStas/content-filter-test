import { DateTime } from "luxon";
import { ContentItem } from "../types/contentItem";
import { Rule } from "./rule.interface";

export class PublishStartRule implements Rule {
  interpret(item: ContentItem, relativeDate?: string): boolean {
    if (item.publishStartAt) {
      const now = relativeDate
        ? DateTime.fromISO(relativeDate)
        : DateTime.now();
      const publishStartAt = DateTime.fromISO(item.publishStartAt);
      if (publishStartAt < now) {
        return false;
      }
    }
    return true;
  }
}
