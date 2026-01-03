import type { PropsWithChildren } from "react";

export default function Layout(props: PropsWithChildren) {
  return <div className="w-full h-dvh max-w-5xl flex flex-col gap-3 items-center overflow-auto">{props.children}</div>;
}
