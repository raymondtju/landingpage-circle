import React from "react";
import { IBM_Plex_Sans } from "@next/font/google";
const ibm = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export default function Button({ children, className, icon, primary }) {
  primary = primary
    ? "text-black bg-gradient-to-r from-[#B2FEFA] to-[#0ED2F7] gap-1"
    : "border-2 border-[#0ED2F7] bg-[#151925] gap-1 hover:bg-[#0ED2F7] hover:text-black";
  return (
    <button
      className={`flex flex-row items-center p-3 px-6 text-sm font-medium transition-colors duration-150 lg:text-base ${primary} ${ibm.className} rounded-lg ${className}`}
    >
      <span>{children}</span>
      {icon}
    </button>
  );
}
