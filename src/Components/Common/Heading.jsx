import React from "react";

/**
 * Simple heading with optional sub
 */
export default function Heading({ title, subtitle, className = "" }) {
  return (
    <div className={className}>
      {title && (
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
          {title}
        </h2>
      )}
      {subtitle && <p className="mt-2 text-slate-600 max-w-xl">{subtitle}</p>}
    </div>
  );
}
