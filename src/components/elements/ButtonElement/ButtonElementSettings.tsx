import { observer } from "mobx-react-lite";
import Field from "../../base/forms/fields/UIFormField";
import { FieldType } from "../../base/forms/fields/types";
import Button from "../../../store/Button/Button";
import SizesSettings from "./SizesSettings";
import AlignmentsSettings from "./AlignmentsSettings";

const ButtonElementSettings: React.FC<{
  buttonStore: Button;
}> = ({ buttonStore }) => {
  return (
    <div data-testid="buttonElementSettings">
      <Field
        type={FieldType.TEXT}
        label="Label"
        name="label"
        placeholder="Button"
        value={buttonStore.label}
        onChange={(value: string) =>
          buttonStore.updateProperty({ key: "label", value })
        }
        onBlur={() => buttonStore.editButtonElement()}
      />
      <Field
        type={FieldType.TEXT}
        label="Action"
        name="action"
        placeholder="External link or existing page"
        value={buttonStore.buttonAction}
        onChange={(value: string) =>
          buttonStore.updateProperty({ key: "buttonAction", value })
        }
        onBlur={() => buttonStore.editButtonElement()}
      />

      <SizesSettings buttonStore={buttonStore}></SizesSettings>
      <AlignmentsSettings buttonStore={buttonStore}></AlignmentsSettings>
    </div>
  );
};

export default observer(ButtonElementSettings);
