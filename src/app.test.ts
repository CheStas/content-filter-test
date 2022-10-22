import app from "./app";
import { AvailabilityType } from "./types/availabilityType";
import { ContentType } from "./types/contentType";
import { FormatType } from "./types/formatType";
import { InputData } from "./types/inputData";
import { LevelType } from "./types/levelType";

describe("test app", () => {
  const input: InputData = {
    levels: [
      {
        levelType: LevelType.CONTENTSET,
        contentItems: [
          {
            contentId: "pnRMgdJKJ0BAD4E",
            contentSetId: "WHEKxCFDUQ",
            contentType: ContentType.DIGITALASSET,
            formatType: FormatType.VIDEO,
            availability: AvailabilityType.SHOW,
            isLocked: false,
            publishStartAt: "2021-06-01T00:00:00-0400",
            publishEndAt: "2021-07-01T00:00:00-0400",
          },
        ],
      },
      {
        levelType: LevelType.TEMPLATE,
        contentItems: [
          {
            contentId: "pnRMgdJKJ0BAD4E",
            contentSetId: "WHEKxCFDUQ",
            contentType: ContentType.DIGITALASSET,
            formatType: FormatType.VIDEO,
            availability: AvailabilityType.SHOW,
            isLocked: true,
            publishStartAt: "",
            publishEndAt: "",
            templateId: "AUVErKrCJE",
          },
        ],
      },
      {
        levelType: LevelType.PORTAL,
        contentItems: [
          {
            contentId: "pnRMgdJKJ0BAD4E",
            contentSetId: "WHEKxCFDUQ",
            contentType: ContentType.DIGITALASSET,
            formatType: FormatType.VIDEO,
            availability: AvailabilityType.SHOW,
            isLocked: true,
            publishStartAt: "",
            publishEndAt: "",
            portalId: "JC8UbVBFJQ",
            templateId: "AUVErKrCJE",
          },
          {
            contentId: "QjwGA8geKb7p",
            contentSetId: "JC8UbVBFJQ",
            contentType: ContentType.DIGITALASSET,
            formatType: FormatType.DOCUMENT,
            availability: AvailabilityType.SHOW,
            isLocked: false,
            publishStartAt: "",
            publishEndAt: "",
            portalId: "JC8UbVBFJQ",
            templateId: "",
          },
        ],
      },
    ],
  };
  const output = [
    {
      contentId: "pnRMgdJKJ0BAD4E",
      isAvailable: true,
    },
    {
      contentId: "QjwGA8geKb7p",
      isAvailable: true,
    },
  ];

  it("should return correct output format", () => {
    expect(app(input)).toEqual(output);
  });
});
