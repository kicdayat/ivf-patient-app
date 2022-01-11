import * as Label from "@radix-ui/react-label";

/* eslint-disable-next-line */
export interface FormLabelProps extends Label.LabelProps {}

export const FormLabel = (props: FormLabelProps) => {
  const { className, children, ...rest } = props;
  return (
    <Label.Root
      className={`${className} block text-sm font-medium text-gray-700`}
      {...rest}
    >
      {children}
    </Label.Root>
  );
};

export default FormLabel;
