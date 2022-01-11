import * as SwitchPrimitive from "@radix-ui/react-switch";

/* eslint-disable-next-line */
export interface SwitchProps extends SwitchPrimitive.SwitchProps {}

export function Switch(props: SwitchProps) {
  return (
    <SwitchPrimitive.Root
      className="w-12 h-6 bg-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2 radix-state-checked:bg-primary-500 transition-all"
      {...props}
    >
      <SwitchPrimitive.Thumb className="block h-5 w-5 rounded-full bg-white shadow shadow-primary-500/30 translate-x-0.5 radix-state-checked:translate-x-[25px] transition-all" />
    </SwitchPrimitive.Root>
  );
}

export default Switch;
