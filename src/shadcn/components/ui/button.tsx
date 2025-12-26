import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";

import { cn } from "~/shadcn/lib/utils";

const colorConfig = {
  brand: {
    contained:
      "text-prose-inverse bg-brand/90 border-0 hover:bg-brand-hover/90 active:bg-brand-active/90 active:shadow-focus-brand",
    tinted:
      "border-0 text-brand bg-brand-light hover:bg-brand-light-hover active:bg-brand-light-active active:shadow-focus-brand",
    outlined:
      "bg-transparent text-brand border border-brand hover:border-brand-hover active:border-brand-active active:shadow-focus-brand",
  },
  info: {
    contained: "text-prose-inverse bg-info border-0 hover:bg-info-hover active:bg-info-active active:shadow-focus-info",
    tinted:
      "border-0 text-info bg-info-light hover:bg-info-light-hover active:bg-info-light-active active:shadow-focus-info",
    outlined:
      "bg-transparent text-info border border-info hover:border-info-hover active:border-info-active active:shadow-focus-info",
  },
  success: {
    contained:
      "text-prose-inverse bg-success border-0 hover:bg-success-hover active:bg-success-active active:shadow-focus-success",
    tinted:
      "border-0 text-success bg-success-light hover:bg-success-light-hover active:bg-success-light-active active:shadow-focus-success",
    outlined:
      "bg-transparent text-success border border-success hover:border-success-hover active:border-success-active active:shadow-focus-success",
  },
  warning: {
    contained:
      "text-prose-inverse bg-warning border-0 hover:bg-warning-hover active:bg-warning-active active:shadow-focus-warning",
    tinted:
      "border-0 text-warning bg-warning-light hover:bg-warning-light-hover active:bg-warning-light-active active:shadow-focus-warning",
    outlined:
      "bg-transparent text-warning border border-warning hover:border-warning-hover active:border-warning-active active:shadow-focus-warning",
  },
  danger: {
    contained:
      "text-prose-inverse bg-danger border-0 hover:bg-danger-hover active:bg-danger-active active:shadow-focus-danger",
    tinted:
      "border-0 text-danger bg-danger-light hover:bg-danger-light-hover active:bg-danger-light-active active:shadow-focus-danger",
    outlined:
      "bg-transparent text-danger border border-danger hover:border-danger-hover active:border-danger-active active:shadow-focus-danger",
  },
  neutral: {
    contained:
      "text-prose-inverse bg-gray-500 border-0 hover:bg-gray-hover active:bg-gray-active active:shadow-focus-gray",
    tinted:
      "border-0 text-gray bg-gray-light hover:bg-gray-light-hover active:bg-gray-light-active active:shadow-focus-gray",
    outlined:
      "bg-transparent text-gray border border-gray hover:border-gray-hover active:border-gray-active active:shadow-focus-gray",
  },
};

const builtCompoundVariants = Object.entries(colorConfig).flatMap(([colorKey, variants]) =>
  Object.entries(variants).map(([variantKey, className]) => ({
    variant: variantKey as "contained" | "tinted" | "outlined",
    color: colorKey as keyof typeof colorConfig,
    className,
  }))
);

const buttonVariants = cva(
  "!cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        contained: "shadow-xs",
        outlined: "border bg-background shadow-xs",
        tinted: "",
        text: "bg-transparent text-primary/70 hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        sm: "h-8 rounded-md gap-1.5 px-3",
        md: "h-9 px-4 py-3",
        lg: "h-10 rounded-md px-5 py-5.5",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
      color: {
        brand: "",
        info: "",
        success: "",
        warning: "",
        danger: "",
        neutral: "",
      },
    },
    compoundVariants: builtCompoundVariants,
    defaultVariants: {
      variant: "contained",
      size: "md",
      color: "brand",
    },
  }
);

function Button({
  className,
  variant = "contained",
  size = "md",
  color = "brand",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      data-color={color}
      className={cn(buttonVariants({ variant, size, color, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
