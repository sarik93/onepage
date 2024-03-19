import "./ButtonElement.scss";
import BasePopover from "../../base/Popover/Popover";
import Button from "../../base/Button/Button";
import ButtonElementSettings from "./ButtonElementSettings";
import ButtonClass from "../../../store/Button/Button";
import { observer } from "mobx-react-lite";

const ButtonElement = observer(
  ({ buttonStore }: { buttonStore: ButtonClass }) => {
    return (
      <div
        className="base-button-wrapper"
        data-horizontal={buttonStore.horizontalAlignment}
        data-vertical={buttonStore.verticalAlignment}
        data-testid="baseButtonWrapper"
      >
        <BasePopover>
          {{
            trigger: <Button buttonStore={buttonStore} />,
            content: <ButtonElementSettings buttonStore={buttonStore} />,
          }}
        </BasePopover>
      </div>
    );
  },
);

export default ({ id }: { id: number }) => {
  const ButtonStore = new ButtonClass({ id }); // only if for quick example, should be all properties from api

  return <ButtonElement buttonStore={ButtonStore} />;
};
