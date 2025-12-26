import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "~/shadcn/components/ui/button";
import { icons } from "~/shared/libs/icons";
import { routes } from "~/shared/libs/routes";

const navItems = [
  {
    title: "Benefits",
    link: "#",
  },
  {
    title: "Process",
    link: "#",
  },
  {
    title: "Pricing",
    link: "#",
  },
  {
    title: "Testimonial",
    link: "#",
  },
  {
    title: "Questions",
    link: "#",
  },
];

export default function Header() {
  return (
    <header className="fixed w-full max-w-5xl">
      <nav className="bg-gray-100 p-3 mx-7 mt-7 rounded-xl flex flex-row justify-between items-center">
        <Link href={routes.home()} className="min-w-23 pl-2">
          <Image src={icons.skatfx.src} alt={icons.skatfx.alt} width={24} height={24} priority />
        </Link>

        <div className="flex flex-row justify-center items-center">
          {navItems.map(item => {
            return (
              <Button key={item.title} href={item.link} color="neutral" variant="text">
                {item.title}
              </Button>
            );
          })}
        </div>

        <Button size="lg" color="brand">
          Join <ChevronRight />
        </Button>
      </nav>
    </header>
  );
}
