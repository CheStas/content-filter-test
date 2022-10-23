import { ContentItem } from "./contentItem";
import { LevelType } from "./levelType";
import { FilterOptions } from "./filterOptions";

export interface InputData {
  levels: Array<{
    levelType: LevelType;
    contentItems: Array<ContentItem>;
  }>;
  filter?: FilterOptions;
}
