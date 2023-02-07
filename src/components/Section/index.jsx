import React from "react";
import Button from "../Button";

import Smallmoon from "/public/icons/small-moon.svg";
import Software from "/public/images/software.png";

import Image from "next/image";
import Layout from "@/components/Layout";
import Card from "../Card";

import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";

export default function Section() {
  return (
    <div>
      <SectionOne />
      <SectionTwo />
      <SectionThree />

      {/* Section 4 */}
      <div className="mt-[150px] mini:relative sm:static lg:mt-[450px]">
        <div className="gradientGreen"></div>

        <div className="flex flex-col">
          <h3 className="w-full text-4xl font-bold text-center lg:mx-auto lg:w-6/12 lg:text-7xl">
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
        <div className="w-full mx-auto lg:w-8/12">
          <h3 className="text-center text-4xl font-bold lg:text-5xl lg:leading-[62px]">
            Concentrate on larger issues.
          </h3>
          <p className="mx-auto mt-6 text-base text-center text-textSecond lg:w-10/12 lg:text-lg">
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
