import { AvailabilityType } from "../types/availabilityType";
import { ContentItem } from "../types/contentItem";
import { ContentType } from "../types/contentType";
import { FormatType } from "../types/formatType";
import { PublishEndRule } from "./publishEnd.rule";

describe("test publishEndRule", () => {
  it("should return true if publishEndAt is empty", () => {
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
    const publishEndRule = new PublishEndRule();
    expect(publishEndRule.interpret(item)).toBe(true);
  });

  it("should return true if publishEndAt is less than now", () => {
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
    const publishEndRule = new PublishEndRule();
    expect(publishEndRule.interpret(item)).toBe(true);
  });

  it("should return false if publishEndAt is greater than now", () => {
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
    const publishEndRule = new PublishEndRule();
    expect(publishEndRule.interpret(item, "2021-05-01T00:00:00-0400")).toBe(
      false
    );
  });
});
