import { BaseFilter } from "./baseFilter";
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
      return upstreamItem;
    }
    return super.filter({ item, upstreamItem, filterOptions });
  }
}
