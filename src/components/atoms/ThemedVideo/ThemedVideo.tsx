import clsx from "clsx";
import type { ComponentProps } from "react";

interface Props extends Omit<ComponentProps<"video">, "src"> {
  src: {
    light: string;
    dark: string;
  };
}

export default function ThemedVideo({ src, className, ...props }: Props) {
  return (
    <>
      <video className={clsx("!block dark:!hidden", className)} {...props} src={src.light} />
      <video className={clsx("!hidden dark:!block", className)} {...props} src={src.dark} />
    </>
  );
}
