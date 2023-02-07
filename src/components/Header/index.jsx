import React from "react";
import Navbar from "../Navbar";
import Image from "next/image";

import Moon from "/public/icons/moon.svg";

import HeaderImage from "/public/images/header.png";
import Button from "../Button";
import Layout from "../Layout";
import { PlayIcon } from "@heroicons/react/24/solid";
import Brand from "../Brand";

export default function Header() {
  return (
    <header className="bg-moon relative overflow-hidden">
      <div className="moon-shadow overflow-hidden rounded-full"></div>
      <Navbar />

      <Layout>
        <div className="z-0">
          <div className="mt-[66px] text-center lg:w-6/12 lg:text-left">
            <h1 className="text-[60px] font-bold leading-[60px] tracking-tighter lg:text-[80px] lg:leading-[88px]">
              <span className="bg-gradient-to-r from-[#B2FEFA] to-[#0ED2F7] bg-clip-text text-transparent">
                Develop
              </span>{" "}
              - your app and web easily with circle.
            </h1>
            <p className="mt-6 text-center text-[14px] font-normal text-textSecond lg:w-8/12 lg:text-left lg:text-[18px] lg:leading-[27px]">
              Circle is a code development platform that gives innovators the
              speed and reliability they need to create at the speed of
              inspiration.
            </p>
          </div>
          <div className="mt-6 flex justify-center gap-6 lg:justify-start">
            <div className="relative">
              <Button className="z-[1] bg-black">Get a Demo</Button>
              <div className="btn-shadow"></div>
            </div>
            <Button primary={true} icon={<PlayIcon className="h-6 w-6" />}>
              Watch a Video
            </Button>
          </div>
          <Image
            src={HeaderImage}
            alt="header-image"
            className="mx-auto mt-[116px] flex max-w-full"
          />
        </div>
      </Layout>

      <Brand />
    </header>
  );
}
