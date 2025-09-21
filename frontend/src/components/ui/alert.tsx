import React from "react";
export function Alert({
  children,
  className,
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={
        "border rounded p-3 bg-blue-50 text-blue-700 " + (className || "")
      }
    >
      {children}
    </div>
  );
}
export function AlertDescription({
  children,
  className,
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div className={"flex justify-between items-center " + (className || "")}>
      {children}
    </div>
  );
}
