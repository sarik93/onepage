import * as Popover from "@radix-ui/react-popover";
import DragSVG from "../../../assets/icons/drag.svg";
import CloseSVG from "../../../assets/icons/close.svg";

const PopoverContentWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="popover-content-wrapper">
      <div className="popover-content-header">
        <img className="popover-content-drag" src={DragSVG} alt="Drag" />
        <div>Button</div>
        <Popover.Close className="popover-content-close">
          <img src={CloseSVG} alt="Close" />
        </Popover.Close>
      </div>
      {children}
    </div>
  );
};

export default PopoverContentWrapper;
