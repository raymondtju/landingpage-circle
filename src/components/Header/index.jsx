import React from "react";
import Navbar from "../Navbar";
import Image from "next/image";

import Moon from "/public/icons/moon.svg";
import Bg2 from "/public/images/bg-2.png";

import HeaderImage from "/public/images/header.png";
import Button from "../Button";
import Layout from "../Layout";
import { PlayIcon } from "@heroicons/react/24/solid";

export default function Header() {
  return (
    <header>
      {/* <Image
        src={Moon}
        alt="moon"
        className="absolute right-0 bg-contain -z-[1] overflow-hidden"
      />
      <Image
        src={Bg2}
        alt="bg2"
        className="absolute w-full max-w-full overflow-hidden -z-[2]"
      /> */}
      <Navbar className="z-0" />
      <div className="z-0">
        <Layout>
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
            <Button>Get a Demo</Button>
            <Button primary={true} icon={<PlayIcon className="h-6 w-6" />}>
              Watch a Video
            </Button>
          </div>
          <Image
            src={HeaderImage}
            alt="header-image"
            className="mt-[116px] flex max-w-full overflow-hidden"
          />
        </Layout>
      </div>
    </header>
  );
}
