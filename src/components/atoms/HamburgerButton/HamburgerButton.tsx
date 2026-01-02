import clsx from "clsx";

type Props = {
  isOpen: boolean;
  onToggle: VoidFunction;
};

export default function HamburgerButton(props: Props) {
  const lineClasses =
    "fill-none stroke-[#272937] stroke-[2px] stroke-linecap-round stroke-linejoin-round transition-[stroke-dasharray,stroke-dashoffset] duration-600 ease-in-out";

  return (
    <button
      type="button"
      onClick={props.onToggle}
      aria-expanded={props.isOpen}
      aria-label="Toggle Menu"
      className="relative bottom-0.5 z-50 cursor-pointer focus:outline-none"
    >
      <svg
        viewBox="0 0 32 32"
        className={clsx(
          "h-11 w-11 rounded-full pl-1.5 pr-2 transition-transform duration-600 ease-in-out",
          props.isOpen ? "-rotate-45" : "rotate-0"
        )}
      >
        <title>Hamburger Menu Icon</title>
        <path
          className={clsx(
            lineClasses,
            props.isOpen
              ? "[stroke-dasharray:20_300] [stroke-dashoffset:-32.42px]"
              : "[stroke-dasharray:12_63] [stroke-dashoffset:0px]"
          )}
          d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
        />

        <path className={lineClasses} d="M7 16 27 16" />
      </svg>
    </button>
  );
}
