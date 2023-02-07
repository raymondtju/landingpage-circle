import React from "react";
import "flowbite";
import Image from "next/image";

import {
  ArrowSmallRightIcon,
  Bars3BottomRightIcon,
} from "@heroicons/react/24/solid";

import Link from "next/link";
import Layout from "../Layout";
import Circle from "/public/icons/Circle.svg";

export default function Navbar() {
  return (
    <Layout>
      <nav className="py-5">
        <div className="flex flex-wrap items-center justify-between text-base font-medium">
          <Link href="/">
            <Image src={Circle} alt="logo" />
          </Link>

          <div className="flex group lg:order-2">
            <button className="flex flex-row items-center gap-1 rounded-lg bg-[#151925] p-1 px-3 text-sm ring-2 ring-[#B3FFAB] lg:p-3 lg:px-6 lg:text-base">
              Lets Building - Its Free
              <ArrowSmallRightIcon className="w-6 h-6 duration-150 group-hover:translate-x-2" />
            </button>
            <button
              data-collapse-toggle="hehe"
              type="button"
              className="inline-flex items-center p-2 ml-2 text-sm text-gray-500 rounded-lg lg:hidden"
              aria-controls="hehe"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3BottomRightIcon className="w-6 h-6" />
            </button>
          </div>
          <div className="hidden w-full lg:order-1 lg:flex lg:w-auto" id="hehe">
            <ul className="flex flex-col float-right px-8 py-4 pr-4 mt-4 text-right bg-black rounded-lg gap-y-1 lg:mt-0 lg:flex-row lg:space-x-6 lg:bg-transparent lg:font-medium">
              <li className="transition-transform duration-300 hover:scale-95">
                <Link href="">How It Works?</Link>
              </li>
              <li className="transition-transform duration-300 text-textSecond hover:scale-95">
                <Link href="#develop">Develop</Link>
              </li>
              <li className="transition-transform duration-300 text-textSecond hover:scale-95">
                <Link href="#features">Features</Link>
              </li>
              <li className="transition-transform duration-300 text-textSecond hover:scale-95">
                <Link href="#documentation">Docs</Link>
              </li>
              <li className="transition-transform duration-300 text-textSecond hover:scale-95">
                <Link href="#result">Result</Link>
              </li>
              <li className="transition-transform duration-300 text-textSecond hover:scale-95">
                <Link href="#blog">Blog</Link>
              </li>
              <li className="transition-transform duration-300 text-textSecond hover:scale-95">
                <Link href="#about">About</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Layout>
  );
}
