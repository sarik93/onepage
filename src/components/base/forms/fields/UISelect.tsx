import { SelectAttributes } from "./types";

const UISelect: React.FC<SelectAttributes> = ({
  name,
  options,
  multiple,
  value,
}) => {
  return (
    <select name={name} value={value} multiple={multiple} data-testid="select">
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default UISelect;
