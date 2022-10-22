import { AvailabilityType } from "../types/availabilityType";
import { ContentItem } from "../types/contentItem";
import { ContentType } from "../types/contentType";
import { FormatType } from "../types/formatType";
import { FormatTypeFilter } from "./formatTypeFilter";

describe("test formatTypeFilter", () => {
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
    const filter = new FormatTypeFilter();
    const filteredItem = filter.filter({ item });
    expect(filteredItem).toBe(item);
    const filterOptions = { formatType: FormatType.VIDEO };
    expect(filter.filter({ item, filterOptions })).toBe(item);
  });
  it("should filter by format type", () => {
    const item: ContentItem = {
      contentId: "pnRMgdJKJ0BAD4E",
      contentSetId: "WHEKxCFDUQ",
      contentType: ContentType.DIGITALASSET,
      formatType: FormatType.DOCUMENT,
      availability: AvailabilityType.SHOW,
      isLocked: false,
      publishStartAt: "2021-06-01T00:00:00-0400",
      publishEndAt: "2021-07-01T00:00:00-0400",
    };
    const filterOptions = {
      formatType: FormatType.VIDEO,
      contentType: ContentType.DIGITALASSET,
    };
    const filter = new FormatTypeFilter();
    const filteredItem = filter.filter({
      item,
      filterOptions,
    });
    expect(filteredItem).toBeNull();
  });
});
