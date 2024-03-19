import { InputAttributes } from "./types";

const UIInput: React.FC<InputAttributes> = ({
  name,
  type,
  placeholder,
  value,
  onChange,
  onBlur,
}) => {
  const onInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e.target.value);
  };

  return (
    <input
      className="base-input"
      name={name}
      placeholder={placeholder}
      type={type}
      value={value}
      data-testid="input"
      onInput={onInput}
      onBlur={onBlur}
    />
  );
};

export default UIInput;
