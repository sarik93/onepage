import React, { memo } from "react";
import { RadioAttributes } from "./types";

const UIRadio: React.FC<RadioAttributes> = ({
  name,
  type,
  checked,
  option,
  onChange,
}) => {
  const className = `ui-radio flex cursor-pointer ${checked ? "checked" : ""}`;
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e.target.value);
  };

  return (
    <label className={className} data-testid="radio-label">
      {option.label && option.label}
      <input
        className="input-hidden"
        name={name}
        type={type}
        value={option.value}
        data-testid="input"
        checked={checked}
        onChange={onChangeHandler}
      />
    </label>
  );
};

export default memo(UIRadio);
