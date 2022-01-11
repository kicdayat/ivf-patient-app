/* eslint-disable react/display-name */
import React, { forwardRef } from "react";

/* eslint-disable-next-line */
export interface InputProps extends React.ComponentPropsWithoutRef<"input"> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (props: InputProps, ref) => {
    const { type = "text", className, ...rest } = props;

    return (
      <input
        ref={ref}
        type={type}
        autoComplete="service"
        className={`${className} appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-600 focus:border-primary-600 sm:text-sm`}
        {...rest}
      />
    );
  }
);

export default Input;
