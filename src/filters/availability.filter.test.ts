import { AvailabilityType } from "../types/availabilityType";
import { ContentItem } from "../types/contentItem";
import { ContentType } from "../types/contentType";
import { FormatType } from "../types/formatType";
import { AvailabilityFilter } from "./availability.filter";

describe("test availabilityFilter", () => {
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
    const availabilityFilter = new AvailabilityFilter();
    expect(availabilityFilter.filter({ item })).toBe(item);
  });

  it("should return new item if filter is applied", () => {
    const availabilityFilter = new AvailabilityFilter();
    expect(availabilityFilter.filter({ item, upstreamItem })).not.toBe(item);
    expect(availabilityFilter.filter({ item, upstreamItem })).not.toBe(
      upstreamItem
    );
  });

  it("should update availability property 'always'", () => {
    const availabilityFilter = new AvailabilityFilter();
    const upstreamContentItem: ContentItem = {
      ...upstreamItem,
      availability: AvailabilityType.ALWAYS,
    };
    expect(
      availabilityFilter.filter({ item, upstreamItem: upstreamContentItem })
    ).toHaveProperty("availability", AvailabilityType.ALWAYS);
  });

  it("should update availability property 'never'", () => {
    const availabilityFilter = new AvailabilityFilter();
    const upstreamContentItem: ContentItem = {
      ...upstreamItem,
      availability: AvailabilityType.NEVER,
    };

    expect(
      availabilityFilter.filter({ item, upstreamItem: upstreamContentItem })
    ).toHaveProperty("availability", AvailabilityType.NEVER);
  });
});
