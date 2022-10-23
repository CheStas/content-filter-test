import { ContentItem } from "../types/contentItem";
import { Maybe } from "../types/general";
import { Filter, FilterHandlerParams } from "./filter.interface";

export abstract class BaseFilter implements Filter {
  private nextFilter: Filter | undefined;

  public setNext(filter: Filter): Filter {
    this.nextFilter = filter;
    return this.nextFilter;
  }

  public filter({
    item,
    upstreamItem,
    filterOptions,
  }: FilterHandlerParams): Maybe<ContentItem> {
    if (this.nextFilter) {
      return this.nextFilter.filter({ item, upstreamItem, filterOptions });
    }
    return item;
  }
}
