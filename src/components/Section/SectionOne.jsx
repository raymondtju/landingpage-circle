import { ArrowRightIcon } from "@heroicons/react/24/solid";
import React from "react";

import Button from "../Button";

export default function SectionOne() {
  return (
    <div className="mt-[144px] mini:relative sm:static">
      <div className="gradientPurple"></div>
      <div className="gradientGreen"></div>
      <div className="z-0 mx-auto md:w-10/12">
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
            icon={<ArrowRightIcon className="w-6 h-6" />}
          >
            Join Community
          </Button>
        </div>
      </div>
    </div>
  );
}
