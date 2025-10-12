"use client";
import { useTheme } from "@/contexts/ThemeContext";
import { useEffect, useState } from "react";
import { ImSun } from "react-icons/im";
import { GoMoon } from "react-icons/go";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    // theme change hole rotate hobe
    setRotation(prev => prev + 180);
  }, [theme]);

  return (
    <button
      onClick={toggleTheme}
      style={{ transform: `rotate(${rotation}deg)` }}
      className="fixed right-4 top-28 text-base-content transition-all duration-500 z-50 hover:scale-150"
      title="Toggle Theme"
    >
      {theme === "light" ? <ImSun className="text-yellow-500" size={24}/> : <GoMoon className="text-yellow-500" size={24}/>}
    </button>
  );
}