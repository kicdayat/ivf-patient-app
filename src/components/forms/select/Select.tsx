// import React, { forwardRef } from 'react';

import React, { forwardRef } from "react";

/* eslint-disable-next-line */
export interface SelectProps extends React.ComponentPropsWithoutRef<"select"> {}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (props: SelectProps, ref) => {
    const { placeholder = "Choose", className, children, ...rest } = props;

    return (
      <select
        ref={ref}
        autoComplete="service"
        placeholder={placeholder}
        className={`${className} appearance-none block w-full pl-3 pr-9 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-600 focus:border-primary-600 sm:text-sm`}
        {...rest}
      >
        {children}
      </select>
    );
  }
);

export default Select;
