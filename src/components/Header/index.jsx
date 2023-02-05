import React from "react";
import Navbar from "../Navbar";
import Image from "next/image";

import Moon from "/public/icons/moon.svg";
import Bg2 from "/public/images/bg-2.png";

import HeaderImage from "/public/images/header.png";
import Button from "../Button";

export default function Header() {
  return (
    <header className="overflow-hidden">
      <Image
        src={Moon}
        alt="moon"
        className="absolute right-0 bg-contain -z-[1] overflow-hidden"
      />
      <Image
        src={Bg2}
        alt="bg2"
        className="absolute w-full max-w-full overflow-hidden -z-[2]"
      />
      <Navbar className="z-0" />
      <div className="mx-auto max-w-[1440px] z-0">
        <div className="mx-[80px]">
          <div className="w-6/12 mt-[66px]">
            <h1 className="font-bold text-[80px] leading-[88px] tracking-tighter">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#B2FEFA] to-[#0ED2F7]">
                Develop
              </span>{" "}
              - your app and web easily with circle.
            </h1>
            <p className="mt-6 text-[18px] font-normal leading-[27px] text-textSecond w-8/12">
              Circle is a code development platform that gives innovators the
              speed and reliability they need to create at the speed of
              inspiration.
            </p>
          </div>
          <div className="flex gap-6 mt-6">
            <Button>Get a Demo</Button>
            <Button primary={true}>Watch a Video</Button>
          </div>
          <Image
            src={HeaderImage}
            alt="header-image"
            className="flex mt-[116px] max-w-full overflow-hidden"
          />
        </div>
      </div>
    </header>
  );
}
