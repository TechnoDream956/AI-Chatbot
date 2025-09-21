import React from "react";
export function Badge({
  children,
  variant,
  className,
}: React.PropsWithChildren<{ variant?: string; className?: string }>) {
  const styleClass =
    variant === "secondary"
      ? "bg-blue-200 text-blue-700 "
      : "bg-blue-800 text-white ";
  return (
    <span
      className={
        "inline-block px-2 py-1 rounded text-xs font-semibold " +
        styleClass +
        (className || "")
      }
    >
      {children}
    </span>
  );
}
