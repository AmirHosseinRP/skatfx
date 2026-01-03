import clsx from "clsx";
import Image, { type ImageProps } from "next/image";

interface Props extends Omit<ImageProps, "src"> {
  src: {
    light: string;
    dark: string;
  };
}

export default function ThemedImage(props: Props) {
  const { src, alt, width, height, className, ...rest } = props;

  return (
    <>
      <Image
        src={src.light}
        alt={alt}
        width={width}
        height={height}
        className={clsx("!block dark:!hidden", className)}
        {...rest}
      />

      <Image
        src={src.dark}
        alt={alt}
        width={width}
        height={height}
        className={clsx("!hidden dark:!block", className)}
        {...rest}
      />
    </>
  );
}
