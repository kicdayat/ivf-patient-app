import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";

/* eslint-disable-next-line */
// export interface ToggleGroupProps extends ToggleGroupPrimitive.ToggleGroupImplMultipleProps {
// }

export type ToggleGroupProps = React.ComponentProps<
  typeof ToggleGroupPrimitive.Root
>;

export const ToggleGroup = ({ ...rest }: ToggleGroupProps) => {
  return <ToggleGroupPrimitive.Root {...rest} />;
};

export const ToggleGroupItem = (
  props: ToggleGroupPrimitive.ToggleGroupItemProps
) => {
  const { className, ...rest } = props;
  return (
    <ToggleGroupPrimitive.Item
      className={
        className ||
        "bg-white text-gold-darker rounded-md font-semibold border border-primary-300 p-2 text-sm flex items-center justify-center hover:bg-primary-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 radix-state-on:bg-primary-600 radix-state-on:text-black"
      }
      {...rest}
    />
  );
};

export default ToggleGroup;
