import React from "react";
import Button from "../Button";
import { ArrowRightIcon, StarIcon } from "@heroicons/react/24/solid";

import { IBM_Plex_Sans } from "@next/font/google";
const ibm = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export default function TestimonialCard({ author, role, message }) {
  return (
    <div className={`${ibm.className}`}>
      <div className="px-10 w-[470px] pt-5 py-8 bg-[#151925] rounded-xl ring-[#151925] hover:ring-2 hover:ring-[#0ED2F7] duration-300 transition-all ease-in-out">
        <div class="flex items-center gap-4">
          <div className="block w-10 h-10 bg-white rounded-full"></div>
          <div className="flex flex-col">
            <strong>{author}</strong>
            <span className="text-textSecond">{role}</span>
          </div>
        </div>
        <p className="mt-5 text-base text-textSecond">{`${message}`}</p>
        <div className="flex flex-row gap-1">
          <StarIcon className="w-6 h-6 mt-5 fill-textGradient" />
          <StarIcon className="w-6 h-6 mt-5 fill-textGradient" />
          <StarIcon className="w-6 h-6 mt-5 fill-textGradient" />
          <StarIcon className="w-6 h-6 mt-5 fill-textGradient" />
          <StarIcon className="w-6 h-6 mt-5 fill-textGradient" />
        </div>
      </div>
    </div>
  );
}
