import { BaseFilter } from "./base.filter";
import { ContentItem } from "../types/contentItem";
import { Maybe } from "../types/general";
import { FilterHandlerParams } from "./filter.interface";

export class IsLockedFilter extends BaseFilter {
  public filter({
    item,
    upstreamItem,
    filterOptions,
  }: FilterHandlerParams): Maybe<ContentItem> {
    if (upstreamItem?.isLocked) {
      const updatedItem = {
        ...item,
        isLocked: true,
        availability: upstreamItem.availability,
        publishStartAt: upstreamItem.publishStartAt,
        publishEndAt: upstreamItem.publishEndAt,
      };
      return updatedItem;
    }
    return super.filter({ item, upstreamItem, filterOptions });
  }
}
