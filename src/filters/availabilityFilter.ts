import { BaseFilter } from "./baseFilter";
import { ContentItem } from "../types/contentItem";
import { Maybe } from "../types/general";
import { FilterHandlerParams } from "./filter.interface";
import { AvailabilityType } from "../types/availabilityType";

export class AvailabilityFilter extends BaseFilter {
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
    if (
      upstreamItem.availability === AvailabilityType.ALWAYS ||
      upstreamItem.availability === AvailabilityType.NEVER
    ) {
      updatedItem.availability = upstreamItem.availability;
    }
    return super.filter({ item: updatedItem, upstreamItem, filterOptions });
  }
}
