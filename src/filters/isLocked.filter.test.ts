import { AvailabilityType } from "../types/availabilityType";
import { ContentItem } from "../types/contentItem";
import { ContentType } from "../types/contentType";
import { FormatType } from "../types/formatType";
import { IsLockedFilter } from "./isLocked.filter";

describe("test isLockedFilter", () => {
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

  const upstreamItem: ContentItem = {
    contentId: "pnRMgdJKJ0BAD4E",
    contentSetId: "WHEKxCFDUQ",
    contentType: ContentType.DIGITALASSET,
    formatType: FormatType.VIDEO,
    availability: AvailabilityType.SHOW,
    isLocked: false,
    publishStartAt: "2021-06-01T00:00:00-0400",
    publishEndAt: "2021-07-01T00:00:00-0400",
  };

  it("should return item when filter does not apply", () => {
    const isLockedFilter = new IsLockedFilter();
    expect(isLockedFilter.filter({ item })).toBe(item);
  });

  it("should return upstreamItem if upstreamItem is locked", () => {
    const isLockedFilter = new IsLockedFilter();
    const upstreamContentItem: ContentItem = {
      ...upstreamItem,
      isLocked: true,
    };
    expect(
      isLockedFilter.filter({ item, upstreamItem: upstreamContentItem })
    ).toBe(upstreamContentItem);
  });
});
