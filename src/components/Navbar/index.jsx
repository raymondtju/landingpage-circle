import React from "react";

import { ArrowSmallRightIcon } from "@heroicons/react/24/solid";

export default function Navbar() {
  return (
    <div className="flex items-center h-[90px]">
      <div className="w-[1440px] mx-auto">
        <div className="flex items-center justify-between mx-[80px] text-base font-medium">
          <div className="">Class.</div>

          <ul className="flex gap-6">
            <li>How It Works?</li>
            <li>Develop</li>
            <li>Features</li>
            <li>Docs</li>
            <li>Result</li>
            <li>Blog</li>
            <li>About</li>
          </ul>

          <button className="p-3 px-6 rounded-lg bg-[#151925] ring-[#B3FFAB] ring-2 flex flex-row items-center gap-1">
            Lets Building - Its Free
            <ArrowSmallRightIcon className="w-6 h-6 stroke-2" />
          </button>
        </div>
      </div>
    </div>
  );
}
