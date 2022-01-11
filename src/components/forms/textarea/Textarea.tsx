/* eslint-disable react/display-name */
// import React, { forwardRef } from 'react';

import React, { forwardRef } from "react";

/* eslint-disable-next-line */
export interface TextareaProps
  extends React.ComponentPropsWithoutRef<"textarea"> {}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (props: TextareaProps, ref) => {
    const { className, ...rest } = props;

    return (
      <textarea
        ref={ref}
        autoComplete="service"
        className={`${className} appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-600 focus:border-primary-600 sm:text-sm`}
        {...rest}
      />
    );
  }
);

export default Textarea;
