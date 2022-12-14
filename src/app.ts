import { AvailabilityCalc } from "./availabilityCalc";
import { AvailabilityFilter } from "./filters/availability.filter";
import { ContentTypeFilter } from "./filters/contentType.filter";
import { FormatTypeFilter } from "./filters/formatType.filter";
import { IsLockedFilter } from "./filters/isLocked.filter";
import { PublishFieldsFilter } from "./filters/publishFields.filter";
import { AvailabilityRule } from "./rules/availability.rule";
import { CombineRule } from "./rules/combine.rule";
import { PublishEndRule } from "./rules/publishEnd.rule";
import { PublishStartRule } from "./rules/publishStart.rule";
import { InputData } from "./types/inputData";
import { OutputItem } from "./types/outputItem";

export default function app(inputData: InputData): OutputItem[] {
  const filter = new ContentTypeFilter();

  filter
    .setNext(new FormatTypeFilter())
    .setNext(new IsLockedFilter())
    .setNext(new AvailabilityFilter())
    .setNext(new PublishFieldsFilter());

  const combineRule = new CombineRule([
    new AvailabilityRule(),
    new PublishStartRule(),
    new PublishEndRule(),
  ]);

  const availabilityCalc = new AvailabilityCalc(filter, combineRule);
  return availabilityCalc.getContentAvailability(
    inputData,
    new Date().toISOString()
  );
}
