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
          <div className="px-10 py-10 border-2 border-[#0ED2F7] rounded-lg">
            <h4 className="text-[26px] leading-[39px] font-semibold">
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
              icon={<ArrowRightIcon className="w-6 h-6" />}
            >
              Join Community
            </Button>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="mt-[200px] ">
        <div className="flex flex-col md:flex-row md:justify-between">
          <h3 className="text-5xl w-6/12 leading-[62px] font-bold">
            Finally you can develop full-stack web applications in one place.
          </h3>
          <p className="w-4/12 text-lg text-textSecond">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint.
          </p>
        </div>
        <Image
          src={Image1}
          alt="section-img1"
          className="mt-[67px] flex mx-auto"
        />
        <div className="flex flex-col gap-6 mt-6 md:flex-row">
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
      <div className="mt-[200px] relative">
        <div className="flex flex-col">
          <Image
            src={Image3}
            alt="section-img3"
            className="flex mt-64 xl:absolute xl:right-0"
          />
          {/* <Image
            src={Smallmoon}
            alt="small-moon"
            className="absolute flex mt-28 -right-20"
          /> */}
          <h3 className="text-5xl w-8/12 leading-[62px] font-bold">
            Circle provides teams and individuals with customizable
            <span className="textGradient">{` management tools `}</span>
            for your source code.
          </h3>
          <p className="w-5/12 mt-6 text-lg text-textSecond">
            Create issues, sections into tasks, track relationships, add custom
            spaces, and initiate discussions. Visualize large projects with
            spreadsheets or codeboards, and use the help of code systems to
            automate everything.
          </p>
        </div>
        <div className="flex flex-row gap-6 mt-10">
          <Button className="">Get Started</Button>
          <Button className="" primary>
            Watch a Video
          </Button>
        </div>
      </div>

      {/* Section 4 */}
      <div className="relative mt-[450px]">
        <div className="flex flex-col">
          <h3 className="w-6/12 mx-auto font-bold text-center text-7xl">
            Useful
            <span className="textGradient">{` software `}</span>
            that can assist.
          </h3>
        </div>
        <div className="mt-10">
          <Image src={Software} alt="software" className="mx-auto mt-14" />
          <Button className="mt-[88px] mx-auto  " primary>
            Download Software
          </Button>
        </div>
      </div>

      {/* Section 5 */}
      <div className="mt-[200px]">
        <div className="w-8/12 mx-auto text-center">
          <h3 className="text-5xl leading-[62px] font-bold  ">
            Concentrate on larger issues.
          </h3>
          <p className="w-10/12 mx-auto mt-6 text-lg text-textSecond">
            Spend less time on repetitive code patterns and more time on what
            really matters building great software.
          </p>
        </div>
        <div className="flex flex-col gap-6 mt-6 md:flex-row">
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
