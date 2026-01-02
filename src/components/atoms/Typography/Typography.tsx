import clsx from "clsx";
import type { ElementType, PropsWithChildren } from "react";
import type { TypographyColor, TypographyVariant } from "~/components/atoms/Typography/Typography.types";

interface Props {
  variant?: TypographyVariant;
  color?: TypographyColor;
  className?: string;
  noWrap?: boolean;
  tagName?: ElementType;
  rtl?: boolean;
}

export default function Typography(props: PropsWithChildren<Props>) {
  const { children, variant = "body1", color = "primary", className, tagName: Tag = "p" } = props;

  return (
    <Tag className={clsx(`text-${variant}`, `text-prose-${color}`, className)} {...(props.rtl && { dir: "rtl" })}>
      {children}
    </Tag>
  );
}
