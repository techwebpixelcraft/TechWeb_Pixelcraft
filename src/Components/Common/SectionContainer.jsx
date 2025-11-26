import React from "react";

/**
 * Simple wrapper for consistent horizontal spacing and max width
 */
export default function SectionContainer({
  children,
  id = "",
  className = "",
}) {
  return (
    <div
      id={id}
      className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </div>
  );
}
