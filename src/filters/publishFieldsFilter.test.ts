import { AvailabilityType } from "../types/availabilityType";
import { ContentItem } from "../types/contentItem";
import { ContentType } from "../types/contentType";
import { FormatType } from "../types/formatType";
import { PublishFieldsFilter } from "./publishFieldsFilter";

describe("test publishFieldsFilter", () => {
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
    const publishFieldsFilter = new PublishFieldsFilter();
    expect(publishFieldsFilter.filter({ item })).toBe(item);
  });

  it("should return new item if filter is applied", () => {
    const publishFieldsFilter = new PublishFieldsFilter();
    expect(publishFieldsFilter.filter({ item, upstreamItem })).not.toBe(item);
    expect(publishFieldsFilter.filter({ item, upstreamItem })).not.toBe(
      upstreamItem
    );
  });
  it("should upate publishStartAt and publishEndAt", () => {
    const publishFieldsFilter = new PublishFieldsFilter();
    const contentItem: ContentItem = {
      ...item,
      publishStartAt: "",
      publishEndAt: "",
    };
    const upstreamContentItem: ContentItem = {
      ...upstreamItem,
      publishStartAt: "2021-06-01T00:00:00-0400",
      publishEndAt: "2021-07-01T00:00:00-0400",
    };
    expect(
      publishFieldsFilter.filter({
        item: contentItem,
        upstreamItem: upstreamContentItem,
      })
    ).toHaveProperty("publishStartAt", upstreamContentItem.publishStartAt);
    expect(
      publishFieldsFilter.filter({ item: contentItem, upstreamItem })
    ).toHaveProperty("publishEndAt", upstreamContentItem.publishEndAt);
  });
});
