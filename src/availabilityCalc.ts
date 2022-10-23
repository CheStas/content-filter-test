import { Filter } from "./filters/filter.interface";
import { Rule } from "./rules/rule.interface";
import { ContentItem } from "./types/contentItem";
import { InputData } from "./types/inputData";
import { OutputItem } from "./types/outputItem";

export class AvailabilityCalc {
  private contentItems = new Map();
  private filter: Filter;
  private rule: Rule;

  constructor(filter: Filter, rule: Rule) {
    this.filter = filter;
    this.rule = rule;
  }

  getContentAvailability(inputData: InputData, relativeDate?: string): Array<OutputItem> {
    for (const level of inputData.levels) {
      for (const contentItem of level.contentItems) {
        const upstreamItem = this.contentItems.get(contentItem.contentId);
        const filteredItem = this.filter.filter({
          item: contentItem,
          upstreamItem,
          filterOptions: inputData.filter,
        });

        if (filteredItem) {
          this.contentItems.set(contentItem.contentId, filteredItem);
        }
      }
    }

    return [...this.contentItems.values()].map((el: ContentItem) => {
      const isAvailable = this.rule.interpret(el, relativeDate);
      return {
        contentId: el.contentId,
        isAvailable,
      };
    });
  }
}
