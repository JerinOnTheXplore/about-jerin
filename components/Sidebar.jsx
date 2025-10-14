"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { RiMenuUnfold4Fill } from "react-icons/ri"; 
import { FaHome, FaUser, FaTools, FaGraduationCap, FaEnvelope } from "react-icons/fa"; 
import { GoProjectSymlink } from "react-icons/go";

export default function Sidebar({ isOpen, setIsOpen }) {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/", icon: <FaHome /> },
    { name: "About", href: "/about", icon: <FaUser /> },
    { name: "Skills", href: "/skills", icon: <FaTools /> },
    { name: "Projects", href: "/projects", icon: <GoProjectSymlink /> },
    { name: "Education", href: "/education", icon: <FaGraduationCap /> },
    { name: "Contact", href: "/contact", icon: <FaEnvelope /> },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="md:hidden fixed left-0 top-4 z-50 bg-base-300 text-base-content px-5 py-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <RiMenuUnfold4Fill size={22} />
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-base-200 border-r border-base-200 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 z-40 flex flex-col items-center`}
      >
        {/* Profile */}
        <div className="text-center mt-24">
          <Image
            src="/images/profile.jpg"
            alt="Jerin"
            width={150}
            height={150}
            className="rounded-full mx-auto border-4 border-gray-400"
          />
          <h2 className="text-lg font-semibold mt-3 text-base-content">
            Jerin
          </h2>
          <p className="text-sm  mb-4 text-base-content">
            Frontend Developer
          </p>
          <hr className="border-gray-300 dark:border-gray-700 w-full mx-auto mb-6" />
        </div>

        {/* Nav Links */}
        <nav className="flex flex-col w-full px-6 space-y-2">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 justify-center py-2 px-4 rounded text-center font-medium transition-colors duration-200 ${
                  active
                    ? "bg-blue-900/90 dark:bg-blue-500/30 text-base-content"
                    : "text-base-content hover:bg-gray-200 dark:hover:bg-gray-600"
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="flex-grow"></div>
        <p className="text-xs  text-base-content mb-4">
          © {new Date().getFullYear()} Jerin
        </p>
      </aside>
    </>
  );
}
