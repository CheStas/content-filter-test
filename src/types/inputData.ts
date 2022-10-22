import { ContentType } from "./contentType";
import { ContentItem } from "./contentItem";
import { FormatType } from "./formatType";
import { LevelType } from "./levelType";

export interface InputData {
  levels: Array<{
    levelType: LevelType;
    contentItems: Array<ContentItem>;
  }>;
  filter?: {
    contentType?: ContentType;
    formatType?: FormatType;
  };
}
