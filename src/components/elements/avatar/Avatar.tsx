/* eslint-disable @typescript-eslint/no-empty-interface */
import * as AvatarPrimitive from "@radix-ui/react-avatar";

/* eslint-disable-next-line */
export interface AvatarProps extends AvatarPrimitive.AvatarProps {
  size?: "sm" | "md" | "lg" | "xl";
}
export interface AvatarImageProps extends AvatarPrimitive.AvatarImageProps {}
export interface AvatarFallbackProps
  extends AvatarPrimitive.AvatarFallbackProps {}

export function Avatar({ size = "md", className, ...rest }: AvatarProps) {
  return (
    <AvatarPrimitive.Root
      className={`${className} inline-flex items-center justify-center align-middle overflow-hidden select-none rounded-full bg-gray-400 ${
        size === "xl"
          ? "w-28 h-28"
          : size === "lg"
          ? "w-20 h-20"
          : size === "md"
          ? "w-16 h-16"
          : size === "sm"
          ? "w-12 h-12"
          : ""
      }`}
      {...rest}
    />
  );
}

export function AvatarImage({ className, ...props }: AvatarImageProps) {
  return (
    <AvatarPrimitive.Image className="w-full h-full object-cover" {...props} />
  );
}

export function AvatarFallback({ className, ...props }: AvatarFallbackProps) {
  return (
    <AvatarPrimitive.Fallback
      className="w-full h-full flex items-center justify-center bg-white text-primary-700 text-sm font-semibold"
      {...props}
    />
  );
}

export default Avatar;
