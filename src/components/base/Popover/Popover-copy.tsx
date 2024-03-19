import "./Popover.scss";
import * as Popover from "@radix-ui/react-popover";
import { forwardRef, useState } from "react";

const TriggerWrapper = forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>((props, ref) => {
  return (
    <div className="popover-trigger-wrapper" ref={ref} {...props}>
      {props.children}
    </div>
  );
});

const BasePopover: React.FC<{
  children: { trigger: React.ReactNode; content: React.ReactNode };
}> = ({ children }) => {
  const [opened, setOpened] = useState(false);
  const togglePopover = () => {
    console.log("t");

    setOpened((prev) => !prev);
  };
  const closePopover = (
    e:
      | CustomEvent<{
          originalEvent: PointerEvent;
        }>
      | CustomEvent<{
          originalEvent: FocusEvent;
        }>
      | KeyboardEvent,
  ) => {
    console.log("c", e.target);
    console.log(children.trigger);

    setOpened(false);
  };

  return (
    <Popover.Root open={opened}>
      <Popover.Trigger asChild>
        <TriggerWrapper onClick={togglePopover}>
          {children.trigger}
        </TriggerWrapper>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          className="popover-content"
          onEscapeKeyDown={closePopover}
          onInteractOutside={closePopover}
        >
          {children.content}
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

export default BasePopover;
