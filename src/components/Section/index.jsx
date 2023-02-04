import React from "react";
import Button from "../Button";

import Image1 from "/public/images/section-image-1.png";
import Image3 from "/public/icons/section-image-3.svg";
import Smallmoon from "/public/icons/small-moon.svg";
import Image from "next/image";
import Layout from "@/Layout";
import Card from "../Card";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

export default function Section() {
  return (
    <Layout>
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
          <h3 className="text-5xl w-8/12 leading-[62px] font-bold">
            Circle provides teams and individuals with customizable management
            tools for your source code.
          </h3>
          <p className="w-5/12 mt-6 text-lg text-textSecond">
            Create issues, sections into tasks, track relationships, add custom
            spaces, and initiate discussions. Visualize large projects with
            spreadsheets or codeboards, and use the help of code systems to
            automate everything.
          </p>
          <Image
            src={Image3}
            alt="section-img3"
            className="absolute right-0 flex mt-64"
          />
          <Image
            src={Smallmoon}
            alt="small-moon"
            className="absolute flex mt-28 -right-20"
          />
        </div>
        <div className="flex flex-row gap-6 mt-10">
          <Button className="">Get Started</Button>
          <Button className="" primary>
            Watch a Video
          </Button>
        </div>
      </div>
    </Layout>
  );
}
