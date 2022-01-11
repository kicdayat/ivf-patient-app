/* eslint-disable react/display-name */
import React, { forwardRef } from "react";

/* eslint-disable-next-line */
export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  variant?: "primary" | "secondary" | "danger" | "gray";
  size?: "small" | "medium" | "large";
  shadow?: "small" | "medium" | "large" | "none";
  rounded?: "none" | "rounded" | "full";
  fullWidth?: boolean;
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children = "Button", ...props }, ref) => {
    const {
      variant = "primary",
      size = "medium",
      rounded = "rounded",
      shadow = "none",
      type = "button",
      disabled = false,
      fullWidth = false,
      isLoading = false,
      className,
      ...rest
    } = props;

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled || isLoading}
        className={cls(`
        ${className}
        ${classes.base}
        ${classes.size[size]}
        ${classes.variant[variant]}
        ${classes.rounded[rounded]}
        ${classes.shadow[shadow]}
        ${disabled && classes.disabled}
        ${fullWidth && classes.fullWidth}
  `)}
        {...rest}
      >
        {isLoading ? <Spinner /> : children}
      </button>
    );
  }
);
export default Button;

const Spinner = () => {
  return (
    <svg
      className="animate-spin"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 4.75V6.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M17.1266 6.87347L16.0659 7.93413"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M19.25 12L17.75 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M17.1266 17.1265L16.0659 16.0659"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M12 17.75V19.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M7.9342 16.0659L6.87354 17.1265"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M6.25 12L4.75 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M7.9342 7.93413L6.87354 6.87347"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

// ===============
// ====Styling====
// ===============
const cls = (input: string) =>
  input
    .replace(/\s+/gm, " ")
    .split(" ")
    .filter((cond) => typeof cond === "string")
    .join(" ")
    .trim();

const classes = {
  base: "focus:outline-none transition duration-200 font-semibold flex justify-center",
  disabled: "opacity-50 cursor-not-allowed",
  pill: "rounded-full",
  fullWidth: "w-full block",
  size: {
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-1.5",
    large: "px-8 py-2 text-lg",
  },
  shadow: {
    none: "shadow-none",
    small: "shadow-sm",
    medium: "shadow-md",
    large: "shadow-lg",
  },
  rounded: {
    none: "rounded-none",
    rounded: "rounded-md",
    full: "rounded-full",
  },
  variant: {
    primary:
      "bg-primary disabled:hover:bg-primary hover:bg-primary-300 focus:ring-2 focus:ring-offset-2 focus:ring-primary-600 focus:ring-opacity-50 text-gray-900 shadow-primary/50",
    secondary:
      "bg-primary-300 disabled:hover:bg-primary-300 hover:bg-primary-200 focus:ring-2 focus:ring-offset-2 focus:ring-brand-gray focus:ring-opacity-50 text-primary-700 shadow-primary-300/50",
    danger:
      "bg-red-500 disabled:hover:bg-red-500 hover:bg-red-800 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 text-white shadow-red-500/50",
    gray: "bg-white disable:hover:bg-white hover:bg-gray-100 text-gray-600 border border-gray-300 focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 shadow-gray-500/50",
  },
};
