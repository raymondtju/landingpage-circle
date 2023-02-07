import Image from "next/image";
import React from "react";

import Button from "../Button";
import Image3 from "/public/icons/section-image-3.svg";

export default function SectionThree() {
  return (
    <div className="-mt-[100px] lg:mt-[200px]">
      <div className="flex flex-col">
        <Image
          src={Image3}
          alt="section-img3"
          className="flex mx-auto mt-64 transition-all duration-300 ease-in-out xl:absolute xl:right-0"
        />
        {/* <Image
            src={Smallmoon}
            alt="small-moon"
            className="absolute flex mt-28 -right-20"
          /> */}
        <h3 className="mt-4 w-full text-center text-4xl font-bold leading-[42px] xl:mt-0 xl:w-8/12 xl:text-left xl:text-5xl xl:leading-[62px]">
          Circle provides teams and individuals with customizable
          <span className="textGradient">{` management tools `}</span>
          for your source code.
        </h3>
        <p className="w-full mx-auto mt-6 text-sm text-center text-textSecond md:w-9/12 lg:w-7/12 xl:mx-0 xl:w-5/12 xl:text-left xl:text-lg">
          Create issues, sections into tasks, track relationships, add custom
          spaces, and initiate discussions. Visualize large projects with
          spreadsheets or codeboards, and use the help of code systems to
          automate everything.
        </p>
      </div>
      <div className="flex flex-row justify-center gap-6 mt-10 xl:justify-start">
        <div className="relative">
          <div className="btn-shadow"></div>
          <Button className="">Get Started</Button>
        </div>
        <Button className="" primary>
          Watch a Video
        </Button>
      </div>
    </div>
  );
}
