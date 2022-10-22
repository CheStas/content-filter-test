import { ContentItem } from "./contentItem";
import { LevelType } from "./levelType";
import { FormatFilters } from "./formatFilters";

export interface InputData {
  levels: Array<{
    levelType: LevelType;
    contentItems: Array<ContentItem>;
  }>;
  filter?: FormatFilters;
}
