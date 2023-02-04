import { ArrowRightIcon } from "@heroicons/react/24/solid";
import React from "react";
import { IBM_Plex_Sans } from "@next/font/google";
const ibm = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export default function Button({ children, className, icon, primary }) {
  primary = primary
    ? "text-black bg-gradient-to-r from-[#B2FEFA] to-[#0ED2F7] gap-1"
    : "ring-2 ring-[#0ED2F7] gap-1";
  return (
    <button
      className={`flex flex-row p-3 px-6 text-base items-center font-medium ${primary} ${ibm.className} rounded-lg ${className}`}
    >
      <span>{children}</span>
      {icon}
    </button>
  );
}
