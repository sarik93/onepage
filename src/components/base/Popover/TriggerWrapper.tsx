import { MouseEvent, forwardRef } from "react";

const TriggerWrapper = forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>((props, ref) => {
  const onClickPrevent = (e: MouseEvent<HTMLDivElement>) => {
    props.onClick && props.onClick(e);
    e.preventDefault();
  };

  return (
    <div
      className="popover-trigger-wrapper"
      ref={ref}
      {...props}
      onClick={onClickPrevent}
    >
      {props.children}
    </div>
  );
});

export default TriggerWrapper;
