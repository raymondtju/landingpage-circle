import React from "react";
import Button from "../Button";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

import Image3 from "/public/icons/section-image-3.svg";

import { IBM_Plex_Sans } from "@next/font/google";
import Image from "next/image";
const ibm = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export default function Card({ buttonVal, title, desc, image }) {
  return (
    <div className={`${ibm.className}`}>
      <div className="lg:py-8 py-2 bg-[#151925] rounded-xl hover:ring-2 hover:ring-[#0ED2F7] duration-300 transition-all ease-in-out">
        <h3 className="lg:mx-10 mx-8 mt-5 lg:text-2xl text-xl font-semibold">{title}</h3>
        <p className="lg:mx-10 mx-8 lg:mt-3 mt-2 lg:text-base text-sm text-textSecond">{`${desc}`}</p>
        <Button
          className={`px-0 lg:mt-10 mt-4 gap-1 ring-transparent lg:mx-10 mx-8`}
          icon={<ArrowRightIcon className="lg:w-6 lg:h-6 h-4 h-4" />}
        >
          Read More
        </Button>
        {image && (
          <Image
            src={Image3}
            alt="image3"
            className="right-0 justify-end block w-8/12 mx-auto hidden lg:flex"
          />
        )}
      </div>
    </div>
  );
}
