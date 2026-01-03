"use client";

import { ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import HamburgerButton from "~/components/atoms/HamburgerButton/HamburgerButton";
import ThemedImage from "~/components/atoms/ThemedImage/ThemedImage";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full max-w-5xl z-9999">
      <nav className="hidden md:flex bg-gray-200/50 backdrop-blur-md min-h-17 p-3 mx-7 mt-7 rounded-xl flex-row justify-between items-center border border-background-primary">
        <Link href={routes.home()} className="min-w-23 pl-2">
          <ThemedImage src={icons.skatfx.src} alt={icons.skatfx.alt} width={28} height={28} />
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

      <nav className="flex md:hidden bg-gray-200/50 backdrop-blur-md flex-row justify-between items-center min-h-17 p-4 shadow-xl">
        <Link href={routes.home()} className="min-w-23 pl-2">
          <ThemedImage src={icons.skatfx.src} alt={icons.skatfx.alt} width={28} height={28} />
        </Link>

        <HamburgerButton isOpen={isMenuOpen} onToggle={() => setIsMenuOpen(prev => !prev)} />
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: isMenuOpen ? "fit-content" : 0 }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="flex flex-col justify-center items-stretch gap-4 bg-gray-200/50 backdrop-blur-md py-7 px-4">
              {navItems.map(item => {
                return (
                  <Button
                    key={item.title}
                    href={item.link}
                    color="neutral"
                    variant="text"
                    className="!text-heading3 !text-start"
                  >
                    {item.title}
                  </Button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
