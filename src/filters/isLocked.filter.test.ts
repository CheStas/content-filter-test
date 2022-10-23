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

  it("should return new item if upstreamItem is locked", () => {
    const isLockedFilter = new IsLockedFilter();

    const upstreamContentItem: ContentItem = {
      contentId: "pnRMgdJKJ0BAD4E",
      contentSetId: "WHEKxCFDUQ",
      contentType: ContentType.DIGITALASSET,
      formatType: FormatType.VIDEO,
      availability: AvailabilityType.SHOW,
      isLocked: true,
      publishStartAt: "2021-06-01T00:00:00-0400",
      publishEndAt: "2021-07-01T00:00:00-0400",
    };

    expect(
      isLockedFilter.filter({ item, upstreamItem: upstreamContentItem })
    ).not.toBe(upstreamContentItem);
    expect(
      isLockedFilter.filter({ item, upstreamItem: upstreamContentItem })
    ).not.toBe(item);
  });

  it("should return upstreamItem fields if upstreamItem is locked", () => {
    const isLockedFilter = new IsLockedFilter();
    const item: ContentItem = {
      contentId: "pnRMgdJKJ0BAD4E",
      contentSetId: "WHEKxCFDUQ",
      contentType: ContentType.DIGITALASSET,
      formatType: FormatType.VIDEO,
      availability: AvailabilityType.SHOW,
      isLocked: false,
    };

    const upstreamContentItem: ContentItem = {
      contentId: "pnRMgdJKJ0BAD4E",
      contentSetId: "WHEKxCFDUQ",
      contentType: ContentType.DIGITALASSET,
      formatType: FormatType.VIDEO,
      availability: AvailabilityType.HIDE,
      isLocked: true,
      publishStartAt: "2021-06-01T00:00:00-0400",
      publishEndAt: "2021-07-01T00:00:00-0400",
    };

    const correctResponse = {
      contentId: "pnRMgdJKJ0BAD4E",
      contentSetId: "WHEKxCFDUQ",
      contentType: ContentType.DIGITALASSET,
      formatType: FormatType.VIDEO,
      availability: AvailabilityType.HIDE,
      isLocked: true,
      publishStartAt: "2021-06-01T00:00:00-0400",
      publishEndAt: "2021-07-01T00:00:00-0400",
    };

    expect(
      isLockedFilter.filter({ item, upstreamItem: upstreamContentItem })
    ).toMatchObject(correctResponse);
  });
});
