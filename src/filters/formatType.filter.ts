import { BaseFilter } from "./base.filter";
import { ContentItem } from "../types/contentItem";
import { Maybe } from "../types/general";
import { FilterHandlerParams } from "./filter.interface";

export class FormatTypeFilter extends BaseFilter {
  public filter({
    item,
    upstreamItem,
    filterOptions,
  }: FilterHandlerParams): Maybe<ContentItem> {
    if (
      filterOptions?.formatType &&
      item.formatType !== filterOptions.formatType
    ) {
      return null;
    }
    return super.filter({ item, upstreamItem, filterOptions });
  }
}
