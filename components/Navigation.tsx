"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";

const navClass = (isActive: boolean) =>
  isActive
    ? "font-semibold text-brand border-b-2 border-brand pb-1 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
    : "text-gray-600 hover:text-gray-900 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-4 dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-between gap-y-2">
        <Link
          href="/"
          className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white whitespace-nowrap"
        >
          Diana Portfolio
        </Link>

        <div className="flex items-center gap-3 sm:gap-6 flex-wrap">
          <Link href="/" className={navClass(pathname === "/")}>
            Home
          </Link>
          <Link href="/projects" className={navClass(pathname === "/projects")}>
            Projects
          </Link>
          <Link href="/contact" className={navClass(pathname === "/contact")}>
            Contact
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
