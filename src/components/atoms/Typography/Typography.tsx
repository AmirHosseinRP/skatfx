import clsx from "clsx";
import { type ElementType, type PropsWithChildren, useMemo } from "react";
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
  const { children, variant = "paragraph1", color = "primary", className, tagName: Tag = "p" } = props;

  const textVariant = useMemo(() => {
    const variants = {
      heading1: "text-heading1",
      heading2: "text-heading2",
      heading3: "text-heading3",
      heading4: "text-heading4",
      heading5: "text-heading5",
      subtitle1: "text-subtitle1",
      subtitle2: "text-subtitle2",
      subtitle3: "text-subtitle3",
      subtitle4: "text-subtitle4",
      subtitle5: "text-subtitle5",
      subtitle6: "text-subtitle6",
      paragraph1: "text-paragraph1",
      paragraph2: "text-paragraph2",
      paragraph3: "text-paragraph3",
      paragraph4: "text-paragraph4",
      paragraph5: "text-paragraph5",
      label1: "text-label1",
      label2: "text-label2",
      label3: "text-label3",
      label4: "text-label4",
      caption1: "text-caption1",
      caption2: "text-caption2",
    };

    return variants[variant];
  }, [variant]);

  const textColor = useMemo(() => {
    const colors = {
      primary: "text-prose-primary",
      secondary: "text-prose-secondary",
      hint: "text-prose-hint",
      disabled: "text-prose-disabled",
      inverse: "text-prose-inverse",
      link: "text-prose-link",
      brand: "text-prose-brand",
      info: "text-prose-info",
      success: "text-prose-success",
      warning: "text-prose-warning",
      danger: "text-prose-danger",
    };

    return colors[color];
  }, [color]);

  return (
    <Tag className={clsx(textVariant, textColor, className)} {...(props.rtl && { dir: "rtl" })}>
      {children}
    </Tag>
  );
}
