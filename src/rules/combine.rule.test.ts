import { AvailabilityType } from "../types/availabilityType";
import { ContentItem } from "../types/contentItem";
import { ContentType } from "../types/contentType";
import { FormatType } from "../types/formatType";
import { CombineRule } from "./combine.rule";
import { Rule } from "./rule.interface";

describe("test combineRule", () => {
  class TestRuleTrue implements Rule {
    interpret(item: ContentItem): boolean {
      return true;
    }
  }

  class TestRuleFalse implements Rule {
    interpret(item: ContentItem): boolean {
      return false;
    }
  }

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

  test("combineRule", () => {
    const testRuleTrue = new TestRuleTrue();
    const testRuleFalse = new TestRuleFalse();
    const combineRule = new CombineRule([testRuleTrue, testRuleFalse]);
    const testRuleTrueSpy = jest.spyOn(testRuleTrue, "interpret");
    const testRuleFalseSpy = jest.spyOn(testRuleFalse, "interpret");
    expect(combineRule.interpret(item)).toBe(false);
    expect(testRuleTrueSpy).toBeCalledWith(item);
    expect(testRuleFalseSpy).toBeCalledWith(item);
  });
});
