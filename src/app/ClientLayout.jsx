"use client";

import { ThemeProvider } from "@/contexts/ThemeContext";
import { useState } from "react";
import Sidebar from "../../components/Sidebar";
import ThemeToggle from "../../components/ThemeToggle";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

export default function ClientLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen flex relative">
        {/* Sidebar */}
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

        {/* Main content */}
        <main
          className={`flex-1 transition-all duration-300 
          ${
            "w-full lg:ml-[20%]"
          }`}
        >
          {children}

          <Tooltip
            id="nav-tooltip"
            place="bottom"
            style={{
              backgroundColor: "#2563EA",
              color: "#fff",
              borderRadius: "6px",
              fontSize: "12px",
            }}
          />
        </main>

        {/* Theme toggle button */}
        <div className="fixed top-6 right-6 z-50">
          <ThemeToggle />
        </div>
      </div>
    </ThemeProvider>
  );
}
