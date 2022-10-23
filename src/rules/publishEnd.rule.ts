import { DateTime } from "luxon";
import { ContentItem } from "../types/contentItem";
import { Rule } from "./rule.interface";

export class PublishEndRule implements Rule {
  interpret(item: ContentItem, relativeDate?: string): boolean {
    if (item.publishEndAt) {
      const now = relativeDate
        ? DateTime.fromISO(relativeDate)
        : DateTime.now();
      const publishEndAt = DateTime.fromISO(item.publishEndAt);
      if (publishEndAt > now) {
        return false;
      }
    }
    return true;
  }
}
