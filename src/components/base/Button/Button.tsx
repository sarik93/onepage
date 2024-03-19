import { observer } from "mobx-react-lite";
import "./Button.scss";
import ButtonStore from "../../../store/Button/Button";

const Button: React.FC<{ buttonStore: ButtonStore }> = ({ buttonStore }) => {
  return (
    <div data-testid="baseButton">
      <a
        data-testid="baseButtonLink"
        style={buttonStore.style}
        className="base-button"
        href={buttonStore.buttonAction}
      >
        {buttonStore.label}
      </a>
    </div>
  );
};

export default observer(Button);
