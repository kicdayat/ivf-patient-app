import { ReactNode } from "react";

/* eslint-disable-next-line */
export interface FormHelperTextProps {
  children?: ReactNode;
}

export const FormHelperText = ({ children }: FormHelperTextProps) => {
  return <p className="mt-2 text-sm text-gray-500">{children}</p>;
};

export default FormHelperText;
