import { ButtonProperties } from "./button";

interface SiteElementBase {
  id: number;
  type: String;
}

type ButtonElement = SiteElementBase & ButtonProperties;

export type SiteElement = ButtonElement; // and any another element types

interface Section {
  id: number;
  elements: SiteElement[];
}

export interface Site {
  id: number;
  sections: Section;
}
export interface SiteWithoutId extends Omit<Site, "id"> {}
