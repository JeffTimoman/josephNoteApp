"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  const getLinkClasses = (path: string) => {
    const baseClasses = "px-4 py-2 rounded-md transition-colors";
    const activeClasses = "bg-blue-600 text-white";
    const inactiveClasses = "text-gray-700 hover:text-blue-600 hover:bg-blue-50";
    
    return `${baseClasses} ${isActive(path) ? activeClasses : inactiveClasses}`;
  };

  return (
    <nav className="w-full bg-white shadow-md border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="text-xl font-bold text-gray-800 hover:text-blue-600"
          >
            Notes App
          </Link>
          <div className="flex space-x-4">
            <Link href="/notes" className={getLinkClasses("/notes")}>
              Notes
            </Link>
            <Link href="/categories" className={getLinkClasses("/categories")}>
              Categories
            </Link>
            <Link href="/profile" className={getLinkClasses("/profile")}>
              Profile
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
