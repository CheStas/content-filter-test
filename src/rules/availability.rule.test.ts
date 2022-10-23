import { AvailabilityType } from "../types/availabilityType";
import { ContentItem } from "../types/contentItem";
import { ContentType } from "../types/contentType";
import { FormatType } from "../types/formatType";
import { AvailabilityRule } from "./availability.rule";

describe("test availabilityRule ", () => {
  test("availability show", () => {
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
    const availabilityRule = new AvailabilityRule();
    expect(availabilityRule.interpret(item)).toBe(true);
  });

  test("availability always", () => {
    const item: ContentItem = {
      contentId: "pnRMgdJKJ0BAD4E",
      contentSetId: "WHEKxCFDUQ",
      contentType: ContentType.DIGITALASSET,
      formatType: FormatType.VIDEO,
      availability: AvailabilityType.ALWAYS,
      isLocked: false,
      publishStartAt: "2021-06-01T00:00:00-0400",
      publishEndAt: "2021-07-01T00:00:00-0400",
    };
    const availabilityRule = new AvailabilityRule();
    expect(availabilityRule.interpret(item)).toBe(true);
  });

  test("availability hide", () => {
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
    const availabilityRule = new AvailabilityRule();
    expect(availabilityRule.interpret(item)).toBe(false);
  });

  test("availability NEVER", () => {
    const item: ContentItem = {
      contentId: "pnRMgdJKJ0BAD4E",
      contentSetId: "WHEKxCFDUQ",
      contentType: ContentType.DIGITALASSET,
      formatType: FormatType.VIDEO,
      availability: AvailabilityType.NEVER,
      isLocked: false,
      publishStartAt: "2021-06-01T00:00:00-0400",
      publishEndAt: "2021-07-01T00:00:00-0400",
    };
    const availabilityRule = new AvailabilityRule();
    expect(availabilityRule.interpret(item)).toBe(false);
  });
});
