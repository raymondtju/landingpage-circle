import React from "react";
import "flowbite";
import Image from "next/image";

import {
  ArrowSmallRightIcon,
  Bars3BottomRightIcon,
} from "@heroicons/react/24/solid";

import Link from "next/link";
import Layout from "../Layout";
import HeaderImage from "/public/images/header.png";
import Circle from "/public/icons/Circle.svg";

export default function Navbar() {
  return (
    <Layout>
      <nav className="py-5">
        <div className="flex flex-wrap items-center justify-between text-base font-medium">
          <Image src={Circle} alt="logo" className="" />

          <div className="flex lg:order-2">
            <button className="flex flex-row items-center gap-1 rounded-lg bg-[#151925] p-1 px-3 text-sm ring-2 ring-[#B3FFAB] lg:p-3 lg:px-6 lg:text-base">
              Lets Building - Its Free
              <ArrowSmallRightIcon className="h-6 w-6" />
            </button>
            <button
              data-collapse-toggle="hehe"
              type="button"
              className="ml-2 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 lg:hidden"
              aria-controls="hehe"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3BottomRightIcon className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden w-full lg:order-1 lg:flex lg:w-auto" id="hehe">
            <ul className="float-right mt-4 flex flex-col gap-y-1 rounded-lg bg-[#151925] py-4 px-8 pr-4  text-right lg:mt-0 lg:flex-row lg:space-x-6 lg:bg-black lg:font-medium">
              <li className="transition-transform duration-300 hover:scale-95">
                <Link href="">How It Works?</Link>
              </li>
              <li className="transition-transform duration-300 hover:scale-95">
                <Link href="">Develop</Link>
              </li>
              <li className="transition-transform duration-300 hover:scale-95">
                <Link href="">Features</Link>
              </li>
              <li className="transition-transform duration-300 hover:scale-95">
                <Link href="">Docs</Link>
              </li>
              <li className="transition-transform duration-300 hover:scale-95">
                <Link href="">Result</Link>
              </li>
              <li>
                <Link href="">Blog</Link>
              </li>
              <li className="transition-transform duration-300 hover:scale-95">
                <Link href="">About</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Layout>
  );
}
