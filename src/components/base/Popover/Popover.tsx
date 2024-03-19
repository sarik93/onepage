import "./Popover.scss";
import * as Popover from "@radix-ui/react-popover";
import PopoverContentWrapper from "./PopoverContentWrapper";
import TriggerWrapper from "./TriggerWrapper";
import { useRef } from "react";

const BasePopover: React.FC<{
  children: { trigger: React.ReactNode; content: React.ReactNode };
}> = ({ children }) => {
  const triggerRef = useRef(null);
  const focusOnTriggerAfterClose = () => {
    const element = triggerRef.current as unknown as HTMLDivElement;
    element && element.focus();
  };

  return (
    <Popover.Root>
      <Popover.Trigger asChild ref={triggerRef} tabIndex={0}>
        <TriggerWrapper>{children.trigger}</TriggerWrapper>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          side="left"
          align="start"
          className="popover-content"
          onEscapeKeyDown={focusOnTriggerAfterClose}
          onPointerDownOutside={focusOnTriggerAfterClose}
        >
          <PopoverContentWrapper>{children.content}</PopoverContentWrapper>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

export default BasePopover;
