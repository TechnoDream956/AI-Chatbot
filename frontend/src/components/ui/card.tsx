import React from "react";
export function Card({
  children,
  className,
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div className={"bg-white rounded shadow " + (className || "")}>
      {children}
    </div>
  );
}
export function CardHeader({
  children,
  className,
}: React.PropsWithChildren<{ className?: string }>) {
  return <div className={className || ""}>{children}</div>;
}
export function CardContent({
  children,
  className,
}: React.PropsWithChildren<{ className?: string }>) {
  return <div className={className || ""}>{children}</div>;
}
