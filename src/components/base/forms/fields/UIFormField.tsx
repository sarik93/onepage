import "./field.scss";
import React, { useCallback } from "react";
import {
  FieldType,
  InputAttributes,
  SelectAttributes,
  CheckboxAttributes,
  RadioGroupAttributes,
} from "./types";
import UIInput from "./UIInput";
import UISelect from "./UISelect";
import UICheckbox from "./UICheckbox";
import UIRadioGroup from "./UIRadioGroup";

const Field: React.FC<
  InputAttributes | SelectAttributes | CheckboxAttributes | RadioGroupAttributes
> = (props) => {
  const onChangeHandler = useCallback(
    props.onChange ? props.onChange : () => {},
    [],
  );

  const renderField = () => {
    switch (props.type) {
      case FieldType.TEXT:
        return <UIInput {...props} onChange={onChangeHandler} />;
      case FieldType.SELECT:
        return <UISelect {...props} onChange={onChangeHandler} />;
      case FieldType.RADIO_GROUP: {
        return <UIRadioGroup {...props} onChange={onChangeHandler} />;
      }
      case FieldType.CHECKBOX:
        return <UICheckbox {...props} onChange={onChangeHandler} />;
      default:
        throw new Error("Invalid Field");
    }
  };

  return (
    <div className="form-field" data-testid={`field-${props.name}`}>
      {props.type === FieldType.RADIO_GROUP ? (
        <div>
          <div className="label-text">{props.label}</div>
          {renderField()}
        </div>
      ) : (
        <label>
          {props.label && <div className="label-text">{props.label}</div>}
          {renderField()}
        </label>
      )}
    </div>
  );
};

export default Field;
