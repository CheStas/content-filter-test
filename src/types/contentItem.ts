import { ContentType } from "./contentType";
import { AvailabilityType } from "./availabilityType";
import { FormatType } from "./formatType";

export interface ContentItem {
  contentId: string;
  contentSetId: string;
  contentType: ContentType;
  formatType: FormatType;
  availability: AvailabilityType;
  isLocked: boolean;
  publishStartAt?: string;
  publishEndAt?: string;
  templateId?: string;
  portalId?: string;
}
