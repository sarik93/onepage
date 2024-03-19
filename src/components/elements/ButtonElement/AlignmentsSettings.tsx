import { observer } from "mobx-react-lite";
import Field from "../../base/forms/fields/UIFormField";
import { FieldType, RadioOption } from "../../base/forms/fields/types";
import HorizontalLeftSVG from "../../../assets/icons/horizontal-left.svg";
import HorizontalCenterSVG from "../../../assets/icons/horizontal-center.svg";
import HorizontalRightSVG from "../../../assets/icons/horizontal-right.svg";
import VerticalTopSVG from "../../../assets/icons/vertical-top.svg";
import VerticalCenterSVG from "../../../assets/icons/vertical-center.svg";
import VerticalBottomSVG from "../../../assets/icons/vertical-bottom.svg";
import {
  HorizontalAlignment,
  VerticalAlignment,
} from "../../../api/models/button";
import Button from "../../../store/Button/Button";

const alignmentsHorizontalOptions: RadioOption[] = [
  {
    label: <img src={HorizontalLeftSVG}></img>,
    value: HorizontalAlignment.LEFT,
  },
  {
    label: <img src={HorizontalCenterSVG}></img>,
    value: HorizontalAlignment.CENTER,
  },
  {
    label: <img src={HorizontalRightSVG}></img>,
    value: HorizontalAlignment.RIGHT,
  },
];
const alignmentsVerticalOptions: RadioOption[] = [
  {
    label: <img src={VerticalTopSVG}></img>,
    value: VerticalAlignment.TOP,
  },
  {
    label: <img src={VerticalCenterSVG}></img>,
    value: VerticalAlignment.CENTER,
  },
  {
    label: <img src={VerticalBottomSVG}></img>,
    value: VerticalAlignment.BOTTOM,
  },
];
const AlignmentsSettings = ({ buttonStore }: { buttonStore: Button }) => {
  const baseHandler = ({
    key,
    value,
  }: {
    key: "horizontalAlignment" | "verticalAlignment";
    value: HorizontalAlignment | VerticalAlignment;
  }) => {
    buttonStore.updateProperty({
      key,
      value,
    });
    buttonStore.editButtonElement();
  };
  const horizontalHandler = (value: HorizontalAlignment) => {
    baseHandler({
      key: "horizontalAlignment",
      value,
    });
  };
  const verticalHandler = (value: VerticalAlignment) => {
    baseHandler({
      key: "verticalAlignment",
      value,
    });
  };

  return (
    <div className="alignments">
      <div className="alignments-block">
        <Field
          type={FieldType.RADIO_GROUP}
          name="horizontal-alignments"
          options={alignmentsHorizontalOptions}
          value={buttonStore.horizontalAlignment}
          onChange={horizontalHandler}
        />
      </div>
      <div className="alignments-block">
        <Field
          type={FieldType.RADIO_GROUP}
          name="vertical-alignments"
          options={alignmentsVerticalOptions}
          value={buttonStore.verticalAlignment}
          onChange={verticalHandler}
        />
      </div>
    </div>
  );
};

export default observer(AlignmentsSettings);
