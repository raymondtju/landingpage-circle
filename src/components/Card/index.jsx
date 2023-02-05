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
      <div className="py-8 bg-[#151925] rounded-xl hover:ring-2 hover:ring-[#0ED2F7] duration-300 transition-all ease-in-out">
        <h3 className="mx-10 mt-5 text-2xl font-semibold">{title}</h3>
        <p className="mx-10 mt-3 text-base text-textSecond">{`${desc}`}</p>
        <Button
          className={`px-0 mt-10 gap-1 ring-transparent mx-10`}
          icon={<ArrowRightIcon className="w-6 h-6" />}
        >
          Read More
        </Button>
        {image && (
          <Image
            src={Image3}
            alt="image3"
            className="right-0 justify-end block w-8/12 mx-auto"
          />
        )}
      </div>
    </div>
  );
}
