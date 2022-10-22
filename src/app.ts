import { ContentItem } from "./types/contentItem";
import { InputData } from "./types/inputData";
import { OutputItem } from "./types/outputItem";

export default function app(inputData: InputData): OutputItem[] {
  const contentItems = new Map();

  for (const level of inputData.levels) {
    for (const contentItem of level.contentItems) {
      contentItems.set(contentItem.contentId, contentItem);
    }
  }

  return [...contentItems.values()].map((el: ContentItem) => {
    return {
      contentId: el.contentId,
      isAvailable: true,
    };
  });
}
