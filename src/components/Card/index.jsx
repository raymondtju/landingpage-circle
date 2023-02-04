import React from "react";
import Button from "../Button";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

export default function Card({ buttonVal, title, desc }) {
  return (
    <div className="">
      <div className="px-10 py-8 bg-[#151925] rounded-xl hover:ring-2 hover:ring-[#0ED2F7] duration-300 transition-all ease-in-out">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="mt-3 text-base text-textSecond">{`${desc}`}</p>
        <Button
          className={`px-0 mt-10 gap-1 ring-transparent`}
          icon={<ArrowRightIcon className="w-6 h-6" />}
        >
          Read More
        </Button>
      </div>
    </div>
  );
}
