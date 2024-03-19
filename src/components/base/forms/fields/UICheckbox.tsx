import React from "react";
import { CheckboxAttributes } from "./types";

const UICheckbox: React.FC<CheckboxAttributes> = ({ name, type, value }) => {
  return <input name={name} value={value} type={type} data-testid="input" />;
};

export default UICheckbox;
