import React from "react";
export const ScrollArea = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, className, ...rest }, ref) => (
  <div ref={ref} className={"overflow-auto " + (className || "")} {...rest}>
    {children}
  </div>
));
ScrollArea.displayName = "ScrollArea";
