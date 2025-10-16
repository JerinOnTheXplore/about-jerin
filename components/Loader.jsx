"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {
  const [show, setShow] = useState(true);
  //kon shape dekhay seta k track korte state declare korsi....
  const [shape, setShape] = useState("circle");
//use effect component mount hotei shape change hote shuru kore......
  useEffect(() => {
    const shapes = ["circle", "square", "triangle"]; //shape er array..
    let index = 0;
//interval diye shape change kora hochche proti 700 mili second e...
    const interval = setInterval(() => {
      index = (index + 1) % shapes.length;
      setShape(shapes[index]);
    }, 700);
//loader show korar timaer ta 3.2 sec pore hide hoy..
    const timer = setTimeout(() => setShow(false), 3200);
//interval r timeout remove kortese......
    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);
//jodi show state false hoy taile loader return korbena..
  if (!show) return null;

  const shapeVariants = {
    circle: { borderRadius: "50%", rotate: 0 },
    square: { borderRadius: "8px", rotate: 90 },
    triangle: { borderRadius: "0%", rotate: 180 },
  };

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-base-100 text-blue-900/90 dark:text-blue-500/30  z-[9999]">
      {/* shape animation */}
      <motion.div
        key={shape}
        variants={shapeVariants}
        animate={shape}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className="w-16 h-16 bg-blue-500/30 dark:bg-blue-900/90"
        style={{
          clipPath:
            shape === "triangle"
              ? "polygon(60% 0%, 0% 100%, 100% 100%)"
              : "none",
        }}
      />
    </div>
  );
}
