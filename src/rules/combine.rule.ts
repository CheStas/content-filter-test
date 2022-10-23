import { ContentItem } from "../types/contentItem";
import { Rule } from "./rule.interface";

export class CombineRule implements Rule {
  private rules: Array<Rule>;

  constructor(rules: Array<Rule>) {
    this.rules = rules;
  }

  interpret(item: ContentItem, relativeDate?: string): boolean {
    return this.rules.every((rule) => rule.interpret(item, relativeDate));
  }
}
