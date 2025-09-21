import React from "react";
export function Button({
  children,
  variant,
  size,
  disabled,
  onClick,
  className,
}: React.PropsWithChildren<{
  variant?: string;
  size?: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
}>) {
  let base = "rounded px-4 py-2 font-medium focus:outline-none transition ";
  if (variant === "outline") base += "border ";
  else base += "bg-blue-800 text-white ";
  if (size === "sm") base += "text-sm ";
  if (disabled) base += "opacity-50 cursor-not-allowed ";
  if (className) base += className;
  return (
    <button disabled={disabled} onClick={onClick} className={base}>
      {children}
    </button>
  );
}
