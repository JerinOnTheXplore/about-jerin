"use client";

import { ThemeProvider } from "@/contexts/ThemeContext";
import { useState } from "react";
import Sidebar from "../../components/Sidebar";
import ThemeToggle from "../../components/ThemeToggle";


export default function ClientLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen flex relative">
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

        <main
          className={`flex-1 transition-all duration-300 ${
            isOpen ? "blur-sm sm:blur-0" : ""
          } ml-0 md:ml-64`}
        >
          {children}
        </main>

        <div className="fixed top-6 right-6 z-50">
          <ThemeToggle/>
        </div>
      </div>
    </ThemeProvider>
  );
}
