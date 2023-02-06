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
          <div className="lg:w-6/12 lg:text-left text-center mt-[66px]">
            <h1 className="font-bold lg:text-[80px] lg:leading-[88px] text-[60px] leading-[60px] tracking-tighter">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#B2FEFA] to-[#0ED2F7]">
                Develop
              </span>{" "}
              - your app and web easily with circle.
            </h1>
            <p className="mt-6 lg:text-[18px] font-normal lg:leading-[27px] text-[14px] text-textSecond lg:w-8/12 lg:text-left text-center">
              Circle is a code development platform that gives innovators the
              speed and reliability they need to create at the speed of
              inspiration.
            </p>
          </div>
          <div className="flex justify-center gap-6 mt-6 lg:justify-start">
            <Button>Get a Demo</Button>
            <Button primary={true} icon={<PlayIcon className="w-6 h-6" />}>
              Watch a Video
            </Button>
          </div>
          <Image
            src={HeaderImage}
            alt="header-image"
            className="flex mt-[116px] max-w-full overflow-hidden"
          />
        </Layout>
      </div>
    </header>
  );
}
