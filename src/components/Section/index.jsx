import React from "react";
import Button from "../Button";

import Image1 from "/public/images/section-image-1.png";
import Image3 from "/public/icons/section-image-3.svg";
import Smallmoon from "/public/icons/small-moon.svg";
import Software from "/public/images/software.png";

import Image from "next/image";
import Layout from "@/components/Layout";
import Card from "../Card";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import TestimonialCard from "../TestimonialCard";

export default function Section() {
  return (
    <div className="">
      {/* Section 1 */}
      <div className="mt-[144px]">
        <div className="mx-auto md:w-10/12">
          <div className="rounded-lg border-2 border-[#0ED2F7] px-10 py-10">
            <h4 className="text-[26px] font-semibold leading-[39px]">
              Join the community around the world
            </h4>
            <p className="mt-3 text-base">
              {`More than millions of people around the world have joined our
                community to develop skills for individuals and collaborate with
                teams. It's your turn to join us! We are waiting for the
                presence of all friends`}
            </p>
            <Button
              primary={true}
              className="mt-10"
              icon={<ArrowRightIcon className="h-6 w-6" />}
            >
              Join Community
            </Button>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="mt-[150px] lg:mt-[200px] ">
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <h3 className="md:8/12 w-full text-center text-4xl font-bold leading-[40px] lg:w-6/12  lg:text-left lg:text-5xl lg:leading-[62px]">
            Finally you can develop full-stack web applications in one place.
          </h3>
          <p className="mt-4 w-full text-center text-sm text-textSecond lg:mt-0 lg:w-4/12 lg:text-left lg:text-lg">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint.
          </p>
        </div>
        <Image
          src={Image1}
          alt="section-img1"
          className="mx-auto mt-10 flex lg:mt-[67px]"
        />
        <div className="mt-6 flex flex-col gap-6 md:flex-row">
          <Card
            title={"Optimized Frameworks"}
            desc={
              "A custom environment designed especially for developing and facilitating React, Vue, Angular, and other frameworks."
            }
          />
          <Card
            title={"Integrated with GitHub"}
            desc={
              "Import and run GitHub repositories directly. Alternatively, you can commit your source code to a repository."
            }
          />
        </div>
      </div>

      {/* Section 3 */}
      <div className="-mt-[100px] lg:mt-[200px]">
        <div className="flex flex-col">
          <Image
            src={Image3}
            alt="section-img3"
            className="mx-auto mt-64 flex transition-all duration-300 ease-in-out xl:absolute xl:right-0"
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
          <p className="mx-auto mt-6 w-full text-center text-sm text-textSecond md:w-9/12 lg:w-7/12 xl:mx-0 xl:w-5/12 xl:text-left xl:text-lg">
            Create issues, sections into tasks, track relationships, add custom
            spaces, and initiate discussions. Visualize large projects with
            spreadsheets or codeboards, and use the help of code systems to
            automate everything.
          </p>
        </div>
        <div className="mt-10 flex flex-row justify-center gap-6 xl:justify-start">
          <Button className="">Get Started</Button>
          <Button className="" primary>
            Watch a Video
          </Button>
        </div>
      </div>

      {/* Section 4 */}
      <div className="mt-[150px] lg:mt-[450px]">
        <div className="flex flex-col">
          <h3 className="w-full text-center text-4xl font-bold lg:mx-auto lg:w-6/12 lg:text-7xl">
            Useful
            <span className="textGradient">{` software `}</span>
            that can assist.
          </h3>
        </div>
        <div className="mt-10">
          <Image src={Software} alt="software" className="mx-auto mt-14" />
          <Button className="mx-auto mt-[88px]  " primary>
            Download Software
          </Button>
        </div>
      </div>

      {/* Section 5 */}
      <div className="mt-[150px] lg:mt-[200px]">
        <div className="mx-auto w-full lg:w-8/12">
          <h3 className="text-center text-4xl font-bold lg:text-5xl lg:leading-[62px]">
            Concentrate on larger issues.
          </h3>
          <p className="mx-auto mt-6 text-center text-base text-textSecond lg:w-10/12 lg:text-lg">
            Spend less time on repetitive code patterns and more time on what
            really matters building great software.
          </p>
        </div>
        <div className="mt-6 flex flex-col gap-6 md:flex-row">
          <Card
            title={"Get customized AI-based recommendations."}
            image
            desc={
              "Get customized AI-based recommendations. A custom environment designed especially for developing and facilitating React, Vue, Angular, and other frameworks."
            }
          />
          <Card
            title={"Help of plugins and source code templates."}
            image
            desc={
              "Get customized AI-based recommendations. A custom environment designed especially for developing and facilitating React, Vue, Angular, and other frameworks."
            }
          />
        </div>
      </div>
    </div>
  );
}
