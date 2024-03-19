import UIRadio from "./UIRadio";
import { FieldType, RadioGroupAttributes } from "./types";

const UIRadioGroup = ({
  value,
  options,
  name,
  onChange,
}: RadioGroupAttributes) => {
  return (
    <div className="flex justify-space-between" data-testid="radio-group">
      {options.map((option) => (
        <UIRadio
          key={option.value}
          name={name}
          onChange={onChange}
          checked={value === option.value}
          type={FieldType.RADIO}
          option={option}
        />
      ))}
    </div>
  );
};

export default UIRadioGroup;
