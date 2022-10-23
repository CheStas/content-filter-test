import { BaseFilter } from "./base.filter";
import { ContentItem } from "../types/contentItem";
import { Maybe } from "../types/general";
import { FilterHandlerParams } from "./filter.interface";

export class PublishFieldsFilter extends BaseFilter {
  public filter({
    item,
    upstreamItem,
    filterOptions,
  }: FilterHandlerParams): Maybe<ContentItem> {
    if (!upstreamItem) {
      return super.filter({ item, upstreamItem, filterOptions });
    }
    const updatedItem = {
      ...item,
    };
    if (upstreamItem.publishStartAt && !item.publishStartAt) {
      updatedItem.publishStartAt = upstreamItem.publishStartAt;
    }
    if (upstreamItem.publishEndAt && !item.publishEndAt) {
      updatedItem.publishEndAt = upstreamItem.publishEndAt;
    }
    return super.filter({ item: updatedItem, upstreamItem, filterOptions });
  }
}
