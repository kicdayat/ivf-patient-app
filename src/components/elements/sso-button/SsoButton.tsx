import React, { forwardRef } from "react";

/* eslint-disable-next-line */
export interface SsoButtonProps
  extends React.ComponentPropsWithoutRef<"button"> {
  size?: "small" | "medium" | "large";
  provider: "google" | "facebook";
  text?: string;
}

export const SsoButton = forwardRef<HTMLButtonElement, SsoButtonProps>(
  (props, ref) => {
    const {
      size = "medium",
      type = "button",
      className,
      provider,
      text,
    } = props;

    return (
      <button
        ref={ref}
        type={type}
        className={cls(`
      ${classes.base}
      ${classes.size[size]}
      ${className}
  `)}
      >
        {provider === "facebook" ? (
          <FacebookIcon />
        ) : provider === "google" ? (
          <GoogleIcon />
        ) : null}
        <span>
          {text
            ? text
            : provider === "google"
            ? "Continue with Google"
            : provider === "facebook"
            ? "Continue with Facebook"
            : ""}
        </span>
      </button>
    );
  }
);
export default SsoButton;

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
  base: "w-full inline-flex items-center space-x-2 justify-center border border-gray-300 rounded-md shadow-sm bg-white font-medium text-gray-500 hover:bg-gray-50",
  size: {
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-1.5",
    large: "px-8 py-2 text-lg",
  },
};

const FacebookIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="2500"
    height="2500"
    viewBox="126.445 2.281 589 589"
    className="w-6 h-6"
  >
    <circle cx="420.945" cy="296.781" r="294.5" fill="#3c5a9a" />
    <path
      d="M516.704 92.677h-65.239c-38.715 0-81.777 16.283-81.777 72.402.189 19.554 0 38.281 0 59.357H324.9v71.271h46.174v205.177h84.847V294.353h56.002l5.067-70.117h-62.531s.14-31.191 0-40.249c0-22.177 23.076-20.907 24.464-20.907 10.981 0 32.332.032 37.813 0V92.677h-.032z"
      fill="#fff"
    />
  </svg>
);

const GoogleIcon = () => (
  <svg
    className="w-6 h-6"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
      <path
        fill="#4285F4"
        d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"
      />
      <path
        fill="#34A853"
        d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"
      />
      <path
        fill="#FBBC05"
        d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"
      />
      <path
        fill="#EA4335"
        d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"
      />
    </g>
  </svg>
);
