import React from "react";
export const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => (
  <input
    ref={ref}
    className={
      "border rounded px-4 py-2 focus:outline-blue-800 " + (className || "")
    }
    {...props}
  />
));
Input.displayName = "Input";
