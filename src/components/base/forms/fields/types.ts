import {
  FieldPath,
  FieldPathValue,
  FieldValues,
  Message,
  Validate,
  ValidationRule,
} from "react-hook-form";

export enum FieldType {
  TEXT = "text",
  SELECT = "select",
  CHECKBOX = "checkbox",
  RADIO = "radio",
  RADIO_GROUP = "radioGroup",
}

interface ValidationAttributes<
  TFieldValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> {
  required?: Message | ValidationRule<boolean>;
  min?: ValidationRule<number | string>;
  max?: ValidationRule<number | string>;
  maxLength?: ValidationRule<number>;
  minLength?: ValidationRule<number>;
  validate?:
    | Validate<FieldPathValue<TFieldValues, TFieldName>, TFieldValues>
    | Record<
        string,
        Validate<FieldPathValue<TFieldValues, TFieldName>, TFieldValues>
      >;
}

interface BaseAttributes<
  TFieldValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> {
  label?: string;
  name: string;
  placeholder?: string;
  validation?: ValidationAttributes;
  value?: FieldPathValue<TFieldValues, TFieldName>;
  onChange?: (value: FieldPathValue<TFieldValues, TFieldName>) => void;
}

export interface InputAttributes extends BaseAttributes {
  type: FieldType.TEXT;
  onBlur?: () => void;
}

export interface CheckboxAttributes extends BaseAttributes {
  type: FieldType.CHECKBOX;
}

export interface RadioOption<
  TFieldValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> {
  label: React.ReactNode;
  value: FieldPathValue<TFieldValues, TFieldName>;
}

export interface RadioAttributes extends BaseAttributes {
  type: FieldType.RADIO;
  option: RadioOption;
  checked: boolean;
}

export interface RadioGroupAttributes extends BaseAttributes {
  type: FieldType.RADIO_GROUP;
  options: RadioOption[];
}

interface OptionAttributes {
  label: string;
  value: string;
}

export interface SelectAttributes extends BaseAttributes {
  type: FieldType.SELECT;
  multiple?: boolean;
  options: OptionAttributes[];
}
