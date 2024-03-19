import Field from "../../base/forms/fields/UIFormField";
import { FieldType, RadioOption } from "../../base/forms/fields/types";
import { ButtonSize } from "../../../api/models/button";
import Button from "../../../store/Button/Button";
import { observer } from "mobx-react-lite";
import { useCallback } from "react";

const SizeLabel = ({ text }: { text: string }) => (
  <div className="size-label flex justify-center align-center">{text}</div>
);

const sizeOptions: RadioOption[] = [
  {
    label: <SizeLabel text="L" />,
    value: ButtonSize.L,
  },
  {
    label: <SizeLabel text="M" />,
    value: ButtonSize.M,
  },
  {
    label: <SizeLabel text="S" />,
    value: ButtonSize.S,
  },
  {
    label: <SizeLabel text="XS" />,
    value: ButtonSize.XS,
  },
];

const SizesSettings = ({ buttonStore }: { buttonStore: Button }) => {
  const onChangeHandler = useCallback((value: ButtonSize) => {
    buttonStore.updateProperty({
      key: "size",
      value,
    });
    buttonStore.editButtonElement();
  }, []);

  return (
    <div className="sizes">
      <Field
        type={FieldType.RADIO_GROUP}
        label="Size"
        name="size"
        options={sizeOptions}
        value={buttonStore.size}
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default observer(SizesSettings);
