import { ContentItem } from "../types/contentItem";
import { FilterOptions } from "../types/filterOptions";
import { Maybe } from "../types/general";

export interface FilterHandlerParams {
  item: ContentItem;
  upstreamItem?: ContentItem;
  filterOptions?: FilterOptions;
}

export interface Filter {
  setNext(filter: Filter): Filter;
  filter(params: FilterHandlerParams): Maybe<ContentItem>;
}
