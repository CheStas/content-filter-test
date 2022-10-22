import { ContentTypeFilter } from "./filters/contentTypeFilter";
import { FormatTypeFilter } from "./filters/formatTypeFilter";
import { LockedFilter } from "./filters/lockedFilter";
import { ContentItem } from "./types/contentItem";
import { InputData } from "./types/inputData";
import { OutputItem } from "./types/outputItem";

export default function app(inputData: InputData): OutputItem[] {
  const contentItems = new Map();
  const filter = new ContentTypeFilter();
  const formatTypeFilter = new FormatTypeFilter();
  const lockedFilter = new LockedFilter();

  filter.setNext(formatTypeFilter).setNext(lockedFilter);

  for (const level of inputData.levels) {
    for (const contentItem of level.contentItems) {
      const upstreamItem = contentItems.get(contentItem.contentId);
      const filteredItem = filter.filter({
        item: contentItem,
        upstreamItem,
        filterOptions: inputData.filter,
      });

      if (filteredItem) {
        contentItems.set(contentItem.contentId, filteredItem);
      }
    }
  }

  return [...contentItems.values()].map((el: ContentItem) => {
    return {
      contentId: el.contentId,
      isAvailable: true,
    };
  });
}
