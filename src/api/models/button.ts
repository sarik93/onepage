export enum HorizontalAlignment {
  LEFT = "left",
  CENTER = "center",
  RIGHT = "right",
}
export enum VerticalAlignment {
  TOP = "top",
  CENTER = "center",
  BOTTOM = "bottom",
}
export enum ButtonSize {
  L = "L",
  M = "M",
  S = "S",
  XS = "XS",
}

export interface ButtonProperties {
  label?: string;
  buttonAction?: string;
  horizontalAlignment?: HorizontalAlignment;
  verticalAlignment?: VerticalAlignment;
  size?: ButtonSize;
}

export type ButtonPropertiesKeys = keyof ButtonProperties;
