import { AvailabilityType } from "../types/availabilityType";
import { ContentItem } from "../types/contentItem";
import { ContentType } from "../types/contentType";
import { FormatType } from "../types/formatType";
import { PublishStartRule } from "./publishStart.rule";

describe("test publishStartRule", () => {
  it("should return true if publishStartAt is empty", () => {
    const item: ContentItem = {
      contentId: "pnRMgdJKJ0BAD4E",
      contentSetId: "WHEKxCFDUQ",
      contentType: ContentType.DIGITALASSET,
      formatType: FormatType.VIDEO,
      availability: AvailabilityType.HIDE,
      isLocked: false,
      publishStartAt: "",
      publishEndAt: "",
    };
    const publishStartRule = new PublishStartRule();
    expect(publishStartRule.interpret(item)).toBe(true);
  });

  it("should return false if publishStartAt is less than now", () => {
    const item: ContentItem = {
      contentId: "pnRMgdJKJ0BAD4E",
      contentSetId: "WHEKxCFDUQ",
      contentType: ContentType.DIGITALASSET,
      formatType: FormatType.VIDEO,
      availability: AvailabilityType.HIDE,
      isLocked: false,
      publishStartAt: "2021-06-01T00:00:00-0400",
      publishEndAt: "2021-07-01T00:00:00-0400",
    };
    const publishStartRule = new PublishStartRule();
    expect(publishStartRule.interpret(item)).toBe(false);
  });

  it("should return true if publishStartAt is greater than now", () => {
    const item: ContentItem = {
      contentId: "pnRMgdJKJ0BAD4E",
      contentSetId: "WHEKxCFDUQ",
      contentType: ContentType.DIGITALASSET,
      formatType: FormatType.VIDEO,
      availability: AvailabilityType.HIDE,
      isLocked: false,
      publishStartAt: "2021-06-01T00:00:00-0400",
      publishEndAt: "2021-07-01T00:00:00-0400",
    };
    const publishStartRule = new PublishStartRule();
    expect(publishStartRule.interpret(item, "2021-03-01T00:00:00-0400")).toBe(
      true
    );
  });
});
