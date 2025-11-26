import React from "react";
import clsx from "clsx";

/**
 * PrimaryButton
 * props:
 *  - variant: 'primary' | 'outline' | 'ghost'
 *  - size: 'sm' | 'md' | 'lg'
 *  - as: string component name ('button' | 'a') or a React Component (Link)
 *  - forwards all other props (onClick, href, to, type, disabled, etc.)
 */
export default function PrimaryButton({
  children,
  variant = "primary",
  size = "md",
  className = "",
  as: Component = "button",
  disabled,
  type,
  ...props
}) {
  const base =
    "inline-flex items-center justify-center rounded-md font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2";

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-5 py-3 text-base",
  };

  // Primary: provide a safe fallback (indigo) and then brand class.
  // Ordering: if brand classes exist they will override the fallback.
  const variants = {
    primary:
      "bg-indigo-600 bg-brand-500 text-white hover:bg-indigo-700 hover:bg-brand-600 shadow-sm",
    outline:
      "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50",
    ghost: "bg-transparent text-slate-700 hover:text-brand-600",
  };

  // disabled styles
  const disabledClasses = disabled ? "opacity-50 pointer-events-none" : "";

  const componentProps = {
    className: clsx(
      base,
      sizes[size],
      variants[variant],
      disabledClasses,
      className
    ),
    ...props,
  };

  // only set type if the rendered element is a native button
  if (Component === "button" || Component === "a-button" /* edge case */) {
    componentProps.type = type || "button";
  } else {
    // remove type for non-button elements to avoid invalid attribute warnings
    if (componentProps.type) delete componentProps.type;
  }

  // ensure disabled attribute for actual <button>
  if (Component === "button" && disabled) componentProps.disabled = true;

  return <Component {...componentProps}>{children}</Component>;
}
