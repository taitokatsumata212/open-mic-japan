import { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`max-w-container mx-auto px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}
