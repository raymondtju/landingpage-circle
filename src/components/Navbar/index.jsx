import React from "react";
import "flowbite";

import { ArrowSmallRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex items-center h-[90px]">
      <div className="w-[1440px] mx-auto">
        <div className="flex items-center justify-between mx-auto w-[88%] text-base font-medium">
          <div className="items-center flex">Class.</div>
          <div className="flex lg:order-2">
            <button className="p-3 px-6 rounded-lg bg-[#151925] ring-[#B3FFAB] ring-2 flex flex-row items-center gap-1">
              Lets Building - Its Free
              <ArrowSmallRightIcon className="w-6 h-6 stroke-2" />
            </button>
            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              className="inline-flex items-center ml-2 p-2 text-sm text-gray-500 rounded-lg lg:hidden"
              aria-controls="navbar-cta"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden lg:flex lg:order-1"
            id="navbar-cta"
          >
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg lg:flex-row lg:space-x-6 lg:mt-0 lg:font-medium lg:border-0">
              <li>
                <Link href="">How It Works?</Link>
              </li>
              <li>
                <Link href="">Develop</Link>
              </li>
              <li>
                <Link href="">Features</Link>
              </li>
              <li>
                <Link href="">Docs</Link>
              </li>
              <li>
                <Link href="">Result</Link>
              </li>
              <li>
                <Link href="">Blog</Link>
              </li>
              <li>
                <Link href="">About</Link>
              </li>
            </ul>
          </div>

          {/* <button className="p-3 px-6 rounded-lg bg-[#151925] ring-[#B3FFAB] ring-2 flex flex-row items-center gap-1">
            Lets Building - Its Free
            <ArrowSmallRightIcon className="w-6 h-6 stroke-2" />
          </button> */}
        </div>


      </div>
    </div>
  );
}
