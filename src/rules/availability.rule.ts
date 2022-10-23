import { AvailabilityType } from "../types/availabilityType";
import { ContentItem } from "../types/contentItem";
import { Rule } from "./rule.interface";

export class AvailabilityRule implements Rule {
  interpret(item: ContentItem): boolean {
    if (
      item.availability === AvailabilityType.SHOW ||
      item.availability === AvailabilityType.ALWAYS
    ) {
      return true;
    }
    return false;
  }
}
