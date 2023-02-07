import Image from "next/image";
import React from "react";

import Card from "../Card";
import Image1 from "/public/images/section-image-1.png";

export default function SectionTwo() {
  return (
    <div className="mt-[150px]  lg:mt-[200px]">
      <div className="flex flex-col lg:flex-row lg:justify-between">
        <h3 className="md:8/12 w-full text-center text-4xl font-bold leading-[40px] lg:w-6/12  lg:text-left lg:text-5xl lg:leading-[62px]">
          Finally you can develop full-stack web applications in one place.
        </h3>
        <p className="w-full mt-4 text-sm text-center text-textSecond lg:mt-0 lg:w-4/12 lg:text-left lg:text-lg">
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
  );
}
