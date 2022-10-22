import { AvailabilityType } from "../types/availabilityType";
import { ContentItem } from "../types/contentItem";
import { ContentType } from "../types/contentType";
import { FormatType } from "../types/formatType";
import { ContentTypeFilter } from "./contentTypeFilter";

describe("test contentTypeFilter", () => {
  it("should return item", () => {
    const item: ContentItem = {
      contentId: "pnRMgdJKJ0BAD4E",
      contentSetId: "WHEKxCFDUQ",
      contentType: ContentType.DIGITALASSET,
      formatType: FormatType.VIDEO,
      availability: AvailabilityType.SHOW,
      isLocked: false,
      publishStartAt: "2021-06-01T00:00:00-0400",
      publishEndAt: "2021-07-01T00:00:00-0400",
    };
    const contentTypeFilter = new ContentTypeFilter();
    const filteredItem = contentTypeFilter.filter({ item });
    expect(filteredItem).toBe(item);
    const filter = { formatType: FormatType.VIDEO };
    expect(contentTypeFilter.filter({ item, filterOptions: filter })).toBe(
      item
    );
  });
  it("should filter by content type", () => {
    const item: ContentItem = {
      contentId: "pnRMgdJKJ0BAD4E",
      contentSetId: "WHEKxCFDUQ",
      contentType: ContentType.DIGITALASSET,
      formatType: FormatType.VIDEO,
      availability: AvailabilityType.SHOW,
      isLocked: false,
      publishStartAt: "2021-06-01T00:00:00-0400",
      publishEndAt: "2021-07-01T00:00:00-0400",
    };
    const filter = {
      formatType: FormatType.VIDEO,
      contentType: ContentType.QUESTION,
    };
    const contentTypeFilter = new ContentTypeFilter();
    const filteredItem = contentTypeFilter.filter({
      item,
      filterOptions: filter,
    });
    expect(filteredItem).toBeNull();
  });
});
