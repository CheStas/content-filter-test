import { BaseFilter } from "./baseFilter";
import { ContentItem } from "../types/contentItem";
import { Maybe } from "../types/general";
import { FilterHandlerParams } from "./filter.interface";

export class ContentTypeFilter extends BaseFilter {
  public filter({
    item,
    upstreamItem,
    filterOptions,
  }: FilterHandlerParams): Maybe<ContentItem> {
    if (
      filterOptions?.contentType &&
      item.contentType !== filterOptions.contentType
    ) {
      return null;
    }
    return super.filter({ item, upstreamItem, filterOptions });
  }
}
